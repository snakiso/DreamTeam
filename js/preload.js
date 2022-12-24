let page = document.querySelector('html');

page.classList.add('load')


window.addEventListener('load', () => {
 page.classList.remove('load')
})