let i = 0;
let $continueButton = document.getElementById('continueButton');
$continueButton.addEventListener('click', function(event) {
  console.log('i value: ' + i);
  i++;
  generateInterview25();
});

function generateInterview25() {
  if (i < 13) {
    let $question = document.getElementById('question');
    let questionIndex = i;
    let myQuestion = infoNC[questionIndex];
    $question.innerText = myQuestion.question;

    let vidId = myQuestion.videoId;
    let $vidId = document.getElementById('videoId');
    $vidId.setAttribute('src', myQuestion.videoId);
  } else {
    window.location.href = 'quizpass.html';
  }
  let state = 0;
  let $qButton = document.getElementById('qButton');
  let $question = document.getElementById('question');
  $qButton.addEventListener('click', function(event) {
    if (state === 0) {
      $question.style.display = 'block';
      $qButton.innerText = 'Click to Hide Question';
      state++;
    } else {
      $question.style.display = 'none';
      $qButton.innerText = 'Click to See Question';
      state--;
    }
  });
}

document.addEventListener('DOMContentLoaded', function(event) {
  generateInterview25();
});
