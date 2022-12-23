let switcher = document.querySelector('.switch');
let switchPoint = document.querySelector('.switch__point');
let switchTheme = document.querySelector('.switch__theme');
let body = document.querySelector('.body');
let logo = document.querySelector('.header__logos');
let title = document.querySelector('.title');
let teamBlock = document.querySelector('.team');
const screenWidth = window.screen.width

firstBg()

switcher.addEventListener('click', () => {
 teamBlock.classList.toggle('light');
 title.classList.toggle('light');
 logo.classList.toggle('light');
 switcher.classList.toggle('light');
 changeBg()
 body.classList.toggle('light');
 switchPoint.classList.toggle('light');
 switchTheme.classList.toggle('light');
 if (switchPoint.classList.contains('light')){
  switchTheme.innerHTML = 'Light'
 }else{
  switchTheme.innerHTML = 'Dark'
 }
})

function changeBg() {
 const img = new Image();
 if (!switchPoint.classList.contains('light')){
  if(screenWidth > 650){
   img.src = '../img/1x/Bg-light.png'
   img.onload = () => {
    body.style.backgroundImage = `url(../img/1x/Bg-light.png)`
   };
  }else{
   img.src = '../img/1x/bg-light-mobile.png'
   img.onload = () => {
    body.style.backgroundImage = `url(../img/1x/bg-light-mobile.png)`
   };
  }
 }else{
  if(screenWidth > 650){
   img.src = '../img/1x/Bg-dark.png'
   img.onload = () => {
    body.style.backgroundImage = `url(../img/1x/Bg-dark.png)`
   };
  }else{
   img.src = '../img/1x/bg-dark-mobile.png'
   img.onload = () => {
    body.style.backgroundImage = `url(../img/1x/bg-dark-mobile.png)`
   };
  }
 }
}

function firstBg(){
 if(screenWidth > 650){
 const img = new Image();
 img.src = '../img/1x/Bg-dark.png'
 img.onload = () => {
  body.style.backgroundImage = `url(../img/1x/Bg-dark.png)`
 };
 }else{
  const img = new Image();
  img.src = '../img/1x/bg-dark-mobile.png'
  img.onload = () => {
   body.style.backgroundImage = `url(../img/1x/bg-dark-mobile.png)`
 }
}
}
