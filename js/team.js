let team = document.querySelector('.team__wrapper');
let popup = document.querySelector('.popup');
let select = document.querySelector('.select');


async function createElem() {
  // 
  let url = `./files/team.json`
  let response = await fetch(url)
  let json = await response.json();
  //
  // итерация по json файлу
  for (let i = 0; i < json.length; i++) {

    // создание контейнера   
    let member = document.createElement("div");
    member.className = 'team__member';
    member.dataset.value = json[i].Value
    member.setAttribute('data-animation-container', '')

    //Создание имени
    let firstName = document.createElement("span");
    firstName.className = 'team__firstName';
    firstName.textContent = json[i].FirstName
    //Создание фамилии
    let secondName = document.createElement("span");
    secondName.className = 'team__secondName'
    secondName.textContent = json[i].SecondName

    //Создание декоративного элемента
    let decor = document.createElement('img');
    decor.className = 'team__decor';
    decor.src = './img/SVG/snowflake.svg'

    //Создание контейнера для фото
    let photoBox = document.createElement('div');
    photoBox.className = 'team__photo';

    //Добавление фото №1
    let photo1 = document.createElement('img');
    photo1.className = 'photo-1';
    photo1.src = json[i].Photo;

    //Добавление фото №2
    let photo2 = document.createElement('img');
    photo2.className = 'photo-2';
    photo2.src = json[i].HoverPhoto


    //Добавление еще одного декоративного элемента
    let snowflakes = document.createElement('img');
    snowflakes.src = './img/SVG/snowflakes.svg'


    //Создание текста   
    let p = document.createElement('p');
    p.className = 'team__description'
    p.textContent = json[i].Description

    //Создание кнопки  'поздравить'  
    let button = document.createElement('button');
    button.className = 'team__button'
    button.dataset.value = json[i].Value
    button.innerHTML = 'Поздравить'

    //Отображение имени в popup  и открытие popup
    button.addEventListener('click', () => {
      popup.style.top = "50%"
      let number = +button.dataset.value
      select.value = button.dataset.value
      document.querySelector('.email').value = json[number - 1].Email
    })

    // Создание списка в select
    let option = document.createElement('option');
    option.value = json[i].Value
    option.textContent = `${json[i].FirstName}  ${json[i].SecondName}`
    
    //Нажатие на имя из списка
    select.addEventListener('change', function (e) {
      document.querySelector('.email').value = json[e.target.value - 1].Email
    })


    //Добавление в верстку  
    select.appendChild(option)
    team.appendChild(member)
    member.appendChild(photoBox)
    photoBox.appendChild(snowflakes)
    photoBox.appendChild(photo1)
    photoBox.appendChild(photo2)
    member.appendChild(firstName)
    member.appendChild(secondName)
    member.appendChild(p)
    member.appendChild(button)
    member.appendChild(decor)

  }

  addClass()

 
  //Инициализация ScrollAnimation
  var $containers = $('[data-animation]:not([data-animation-child]), [data-animation-container], [data-animation-start]');
  $('[data-animation-start]').scrollAnimations({
    offset: 0.5
  });
  $containers.scrollAnimations();

}

createElem()

//Функция добавляющая класс с задержкой для блоков членов команды
function addClass() {
  let member = document.querySelectorAll('.team__member')
  for (let i = 0; i < member.length; i++) {
    if (+member[i].dataset.value % 2 == 0) {
      member[i].classList.add('tr-delay')
    }
  }
}

//Закрытие popup
let close = document.querySelector('.close');
close.addEventListener('click', () => {
  popup.style.top = '-100%'
})

