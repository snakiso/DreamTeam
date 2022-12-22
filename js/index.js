let switcher = document.querySelector('.switch');
let switchPoint = document.querySelector('.switch__point');
let switchTheme = document.querySelector('.switch__theme');
let body = document.querySelector('.body');
let logo = document.querySelector('.header__logos');
let title = document.querySelector('.title');
let teamBlock = document.querySelector('.team');

switcher.addEventListener('click', () => {
 teamBlock.classList.toggle('light');
 title.classList.toggle('light');
 logo.classList.toggle('light');
 switcher.classList.toggle('light');
 body.classList.toggle('light');
 switchPoint.classList.toggle('light');
 switchTheme.classList.toggle('light');
 if (switchPoint.classList.contains('light')){
  switchTheme.innerHTML = 'Light'
 }else{
  switchTheme.innerHTML = 'Dark'
 }
})