let team = document.querySelector('.team__wrapper');
let popup = document.querySelector('.popup');
let select = document.querySelector('.select');


async function createElem() {
 let url = `./files/team.json`
 let response = await fetch(url)
 let json = await response.json();

 for (let i = 0; i < json.length; i++) {
  let member = document.createElement("div");
  member.className = 'team__member';
  member.dataset.value = json[i].Value
  member.setAttribute('data-animation-container', '')
 

  let firstName = document.createElement("span");
  firstName.className = 'team__firstName';
  firstName.textContent = json[i].FirstName

  let secondName = document.createElement("span");
  secondName.className = 'team__secondName'
  secondName.textContent = json[i].SecondName

  let border = document.createElement('div');
  border.className = 'team__border';

  let decor = document.createElement('img');
  decor.className = 'team__decor';
  decor.src = './img/SVG/snowflake.svg'

  let photo = document.createElement('div');
  photo.className = 'team__photo';
  photo.style.backgroundImage = json[i].Photo

  photo.addEventListener('mouseover', () => {
   photo.style.backgroundImage = json[i].HoverPhoto
  })

  photo.addEventListener('mouseout', () => {
   photo.style.backgroundImage = json[i].Photo
  })


  let snowflakes = document.createElement('img');
  snowflakes.src = './img/SVG/snowflakes.svg'

  let p = document.createElement('p');
  p.className = 'team__description'
  p.textContent = json[i].Description

  let button = document.createElement('button');
  button.className = 'team__button'
  button.dataset.value = json[i].Value
  button.innerHTML = 'Поздравить'

  button.addEventListener('click', () => {
   select.value = button.dataset.value
  })
 

  let option = document.createElement('option');
  option.value = json[i].Value
  option.textContent = `${json[i].FirstName}  ${json[i].SecondName}`

  select.appendChild(option)
  team.appendChild(member)
  member.appendChild(photo)
  photo.appendChild(snowflakes)
  member.appendChild(border)
  border.appendChild(firstName)
  border.appendChild(secondName)
  border.appendChild(p)
  border.appendChild(button)
  border.appendChild(decor)

 


  button.addEventListener('click', () => {
   popup.style.top = "50%"
  })
 }

 addClass()

 var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container], [data-animation-start]');
 $('[data-animation-start]').scrollAnimations({
  offset: 0.5
 });
 $containers.scrollAnimations();

}

createElem()

function addClass(){
 let member = document.querySelectorAll('.team__member')
 for(let i = 0; i < member.length; i++){
  if(+member[i].dataset.value % 2 == 0){
   member[i].classList.add('tr-delay')
  }
 }
}

let close = document.querySelector('.close');
close.addEventListener('click', () => {
 popup.style.top = '-100%'
})

