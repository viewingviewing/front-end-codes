function saveReview(){
  let username = document.querySelector('#username').value;
  let showname = document.querySelector('#showname').value;
  let seat = document.querySelector('#seat').value;
  let star = document.querySelector('#star').value;
  let review_image = document.querySelector('#review_image').value;
  let review_text = document.querySelector('#review_text').value;

  localStorage.setItem('username', username);
  localStorage.setItem('showname', showname);
  localStorage.setItem('seat', seat);
  localStorage.setItem('star', parseFloat(star)/2);
  localStorage.setItem('review_image', review_image);
  localStorage.setItem('review_text', review_text);
}

const drawStar = (target) => {
  document.querySelector(`.star span`).style.width = `${target.value * 10}%`;
}