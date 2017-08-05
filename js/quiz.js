const $responseContainer = document.getElementById('responseContainer');
let correctCount = 0;
let incorrectCount = 0;

(function() {
  let state = 0;
  let $qButton = document.getElementById('qButton');
  let $question = document.getElementById('question');
  $qButton.addEventListener('click', function(event) {
    if (state === 0) {
      $question.style.display = 'block';
      //$question.style.display = 'block';
      state++;
    } else {
      $question.style.display = 'none';
      state--;
    }
  });
  document.addEventListener('DOMContentLoaded', function(event) {
    generateQuiz();
  });
  $responseContainer.addEventListener('click', function(event) {
    if (event.target.value === undefined) {
      return;
    } else if (event.target.value === true) {
      correctCount++;
      $win = document.getElementById('win');
      $win.style.display = 'block';
      setTimeout(function() {
        $win.style.display = 'none';
      }, 800);
    } else {
      incorrectCount++;
      $lose = document.getElementById('lose');
      $lose.style.display = 'block';
      setTimeout(function() {
        $lose.style.display = 'none';
      }, 800);
    }
    if (incorrectCount >= 5) {
      window.location.href = 'quizfail.html';
    } else if (correctCount >= 6) {
      window.location.href = 'quizpass.html';
    } else {
      console.log(`Correct:${correctCount} Incorret:${incorrectCount}`);
      generateQuiz();
    }
  });
})();

function generateQuiz() {
  $responseContainer.innerHTML = '';
  let $question = document.getElementById('question');
  let questionIndex = Math.floor(Math.random() * historyCivics.length);

  let myQuestion = historyCivics.splice(questionIndex, 1);
  $question.innerText = myQuestion[0].question;

  let vidId = myQuestion[0].videoId;
  let $vidId = document.getElementById('videoId');
  $vidId.setAttribute('src', myQuestion[0].videoId);

  let options = ['resp1', 'resp2', 'resp3', 'resp4'];
  for (i = 0; i < 4; i++) {
    let randomOption = options.splice(Math.floor(Math.random() * options.length), 1);
    let $thisDiv = document.createElement('div');
    $thisDiv.innerText = myQuestion[0][randomOption][0];
    $thisDiv.value = myQuestion[0][randomOption][1];
    $thisDiv.classList.add('response');
    $responseContainer.appendChild($thisDiv);
  }
}
