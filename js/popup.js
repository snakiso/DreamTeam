

let checkbox = document.querySelector('.checkbox');
let submit = document.querySelector('.submit');
let textarea = document.querySelector('.popup__text');
let author = document.querySelector('.name');


textarea.addEventListener('keyup', () => {
 removeDisabled()
})

checkbox.addEventListener('click', () => {
 removeDisabled()
})

author.addEventListener('keyup', () => {
 removeDisabled()
})

function removeDisabled(){
 if (textarea.value > '' && checkbox.checked || textarea.value > '' && author.value > '') {
  submit.removeAttribute('disabled')
 }else{
  submit.setAttribute('disabled', '')
 }
}