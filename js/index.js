const homeData = [
  {
    title: 'History and Civics',
    text: 'Study 10 random questions from the official US History and Civics test. Get 6 correct to pass!',
    link: '<a href="quiz.html">Click Here to Take the Quiz!</a>'
  },
  {
    title: 'Pts 2-5',
    text: 'Personal & Contact Info',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Pts 6-8',
    text: 'Parents, Height & Work',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Pts 9-11',
    text: 'Travel, Marriage & Kids',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Pt 12a',
    text: 'First part of these questions.',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Pt 12b',
    text: 'Second part of these questions.',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Pt 12c',
    text: 'Third part of these questions.',
    link: '<a href="#">Study Now</a>'
  },
  {
    title: 'Full Version of the NC-400 Immigration Interview',
    text: 'Study all of the parts of the NC-400 interview in one place, just like in the real world.',
    link: '<a href="#">Take the full interview now. Allow up to 30 minutes to complete this.</a>'
  }
];

(function generateHome() {
  let $mainCover = document.getElementById('mainCover');
  for (i = 0; i < 8; i++) {
    let $thisCard = document.createElement('div');
    $thisCard.classList.add('col');
    if (i === 0 || i === 7) {
      $thisCard.classList.add('s12');
    } else {
      $thisCard.classList.add('s6');
      $thisCard.classList.add('m4');
    }
    if (i === 0) {
      $thisCard.innerHTML = `<div class="card" style="background-color: rgba(20, 20, 200, 0.80)"><div class="card-content white-text"><span class="card-title">${homeData[
        i
      ].title}</span><p>${homeData[i].text}</p></div>  <div class="card-action">${homeData[i].link}</div></div>`;
    } else if (i === 7) {
      $thisCard.innerHTML = `<div class="card" style="background-color: rgba(200, 20, 20, 0.80)"><div class="card-content white-text">  <span class="card-title">${homeData[
        i
      ].title}</span><p>${homeData[i].text}</p></div><div class="card-action">${homeData[i].link}</div></div>`;
    } else {
      $thisCard.innerHTML = `<div class="card"><div class="card-content white-text"><span class="card-title">${homeData[i].title}</span><p>${homeData[i]
        .text}</p></div><div class="card-action">${homeData[i].link}</div></div>`;
    }
    $mainCover.appendChild($thisCard);
  }
})();
