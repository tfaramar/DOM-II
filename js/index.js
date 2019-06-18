// Your code goes here

document.addEventListener('keydown', function(event){
  console.log('key went down!');
  log.textContent += ` ${event.code}`;
});

document.addEventListener('keyup', function(event){
  console.log('key went up!');
  log.textContent -= ` ${event.code}`;
});

window.addEventListener('scroll', function(){
  console.log('scrolled!');
});

const logoHeader = document.querySelector('h1');
logoHeader.addEventListener('mouseover', function(event){
  event.target.style.color = "orange"
});
logoHeader.addEventListener('mouseleave', function(event){
  event.target.style.color = "gold"
});

const links = document.querySelectorAll('.nav-link');
links.forEach(function(elem){
  elem.addEventListener('click', function(event){
    event.target.style.fontStyle = "italic";
  });
});

function randomColors(){
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
const mainHeaders = document.querySelectorAll('h2');
mainHeaders.forEach(function(elem){
  elem.addEventListener('click', function(event){
    event.target.style.color = randomColors();
  });
});

const heroImage = document.querySelector('img');
heroImage.addEventListener('wheel', function(event){
  event.target.style.opacity = 0.5;
  event.stopPropagation();
});

const permitAlert = function (event) {
  alert("Interested in using our content? Please reach out to us for permission at funbus@busfun.com!");
};
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(elem){
  elem.addEventListener('copy', permitAlert);
});

const clickHi = function (event) {
  console.log('hi! find a way to redirect me to another URL');
};
const signUpBtns = document.querySelectorAll('.btn');
signUpBtns.forEach(function(elem){
  elem.addEventListener('dblclick', clickHi);
});
