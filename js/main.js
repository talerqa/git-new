const menuList = document.querySelector('.header')
const activeMenu = document.querySelector('.menu__active');
const user = document.querySelector('.header__user');
const logIn = document.querySelector('.sign-in');
const theme = document.querySelector('.theme');
const signUp = document.querySelector ('.sign-up');
const body = document.querySelector('body');
const card = document.querySelector('.card');


// Открытие активного меню
menuList.addEventListener('click', event => {
  if (event.target.closest('.menu__link')) {
      activeMenu.classList.add('menu__active--active');
      document.querySelector('.main').classList.add('dark__theme');
      document.querySelector('.footer').classList.add('dark__theme');
      body.style.overflow = 'hidden';
  } 
});

// Закрытие меню при кликах вне меню
document.addEventListener('click', event => { 
  if (!event.target.closest('.menu__link') && !event.target.closest('.menu__active--active')) {
    activeMenu.classList.remove('menu__active--active');
    document.querySelector('.main').classList.remove('dark__theme')
    document.querySelector('.footer').classList.remove('dark__theme')
    body.style.overflow =  'visible'
  }

  //Валюта открытие закртыие
  if (event.target.closest('.header__money-show')) {
    $activeMoney.classList.toggle('header__top-money__inner--active');   
  }

  if(!event.target.closest('.header__money-show') && !event.target.closest('.header__money-item')) {
    $activeMoney.classList.remove('header__top-money__inner--active');   
  }

  // Открытие модальног окна
  if (event.target.closest('.header__user-link__login') || 
  event.target.closest('.header__user-btn')) {
    body.style.overflow = 'hidden';
    theme.classList.add('dark__theme_log');
    logIn.classList.add('sign-in--active');
  }
  
  if(event.target.closest('.header__user-link__registration')) {
    signUp.classList.add('sign-up--active');
    body.style.overflow = 'hidden';
    theme.classList.add('dark__theme_log');
  }

  if(event.target.closest('.header__cart')) {
    card.classList.add('card--active')
    body.style.overflow = 'hidden';
    theme.classList.add('dark__theme_log');
  }

// Закрытие модального окна 

  if(event.target.closest('.sign-in__close') || event.target.closest('.theme')) {
    logIn.classList.remove('sign-in--active');
    theme.classList.remove('dark__theme_log');
    body.style.overflow = 'visible';
    
    passWord.forEach(element => {
      element.setAttribute('type', 'password')
      element.value = "";
    });
  }

  if(event.target.closest('.sign-up__close') || event.target.closest('.theme')) {
    signUp.classList.remove('sign-up--active');
    theme.classList.remove('dark__theme_log');
    body.style.overflow = 'visible';
    
    passWord.forEach(element => {
      element.setAttribute('type', 'password');
      element.value = "";
    });  
  }


  if(event.target.closest('.card__window-close') || event.target.closest('.theme')) {
    card.classList.remove('card--active')
    card.classList.add('card')
    theme.classList.remove('dark__theme_log');
    body.style.overflow = 'visible';
  }

});

// Закртыие меню при эскей
document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      activeMenu.classList.remove('menu__active--active');
      document.querySelector('.main').classList.remove('dark__theme')
      document.querySelector('.footer').classList.remove('dark__theme')
  
      logIn.classList.remove('sign-in--active');
      signUp.classList.remove('sign-up--active');
      card.classList.remove('card--active')
      card.classList.add('card')

      theme.classList.remove('dark__theme_log');
      body.style.overflow = 'visible';
    }
  
});


const $money = document.querySelector('.header__top-money')
const $activeMoney = document.querySelector('.header__money');

// Меню валюты закрывается когда убран курсор
$money.addEventListener('mouseleave', () => {
    $activeMoney.classList.remove('header__top-money__inner--active');   
}) 

const passWord = document.querySelectorAll('.modal-window__password-text');
const showPassword = document.querySelectorAll('.sign-in__btn-eye');
const showPassw = document.querySelectorAll('.sign-up__btn-eye');

// Показать пароль в модальном окне
  function showPass() {
    // Показать пароль в sign-in
  showPassword.forEach(element => {
    element.addEventListener('click', ()=> {
      passWord.forEach(element => {
        if (element.getAttribute('type') === 'password') {
          element.setAttribute('type', 'text')
        } 
        else {
          element.setAttribute('type', 'password')
        }
      });
    });
  });

// Показать пароль в sign-up
  showPassw.forEach(element => {
    element.addEventListener('click', ()=> {
      passWord.forEach(element => {
        if (element.getAttribute('type') === 'password') {
          element.setAttribute('type', 'text')
        } 
        else {
          element.setAttribute('type', 'password')
        }
      });
    });
  });
}
showPass()

  /// Открыть Модальное окно



// Слайдер hero
$('.hero-slider').slick({
  dots: true,
  swipe: false,
 
});

// Слайдер карточек

$('.arrivals-slider').slick({
  dots: true,
  arrows:false,
})


const item = document.querySelectorAll('.arrivals-slider__item');
const valueLike = document.querySelector('.header__like-value')
const buttonLike = document.querySelectorAll('.arrivals-slider__like')


item.forEach(element => { 
  element.addEventListener('click', (event) => {
    
    if (event.target.closest('.arrivals-slider__like')) {

      //Если клик по лайку окрашивается кнопка в красный и +1 в счетчик
      if (event.target.closest('.arrivals-slider__like').style.backgroundColor == '') {
        valueLike.innerText = parseInt(valueLike.innerText) + 1;
        event.target.closest('.arrivals-slider__like').style.backgroundColor = '#e63f3fc7';
      }
        
      //Если клик по окрашенному лайку, кнопка становится дефолтной и -1 в счетчик
      else if (event.target.closest('.arrivals-slider__like').style.backgroundColor == 'rgba(230, 63, 63, 0.78)') {
        valueLike.innerText = parseInt(valueLike.innerText) - 1;
        event.target.closest('.arrivals-slider__like').style.backgroundColor = '';
      }
    }
});
});



function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 8 * 24 * 60 * 60 * 1000); // for endless timer
initializeClock('countdown', deadline);



document.addEventListener('click', (event) => {
   
  if(event.target.closest('.product__item-btn')) {

    // Задаем переменную и выполняем функцию для каждого элемента Size
    let sizeValueNum; 
    
    document.querySelectorAll('.product__item-size-radio').forEach( e => {
      if (e.checked) {
        sizeValueNum =  e.value
       } 
      })
    // Задаем переменную и выполняем функцию для каждого элемента Color
    let colorValueNum;
     document.querySelectorAll('.product__item-color-radio').forEach( e => {
      if (e.checked) {
          colorValueNum =  e.value
          }    
     })

    const prodInfo = {
      id: document.querySelector('.product__item').dataset.id,
      img: document.querySelector('.product__img').getAttribute('src'),
      colorValue:  colorValueNum,
      sizeValue: sizeValueNum,
      title: document.querySelector('.product__item-title ').innerText,
      price: document.querySelector('.product__item-price').innerText,
    }

      const cardItemHTML = 
      `<div class="card__item" data-id="${prodInfo.id}">
      <img class="card__item-img" src="${prodInfo.img}" alt="" >
      <div class="card__item-description">
        <a class="card__item-link" href="#">${prodInfo.title}</a>
        <p class="card__item-color">Color <span class="card__item-color-value">${prodInfo.colorValue}</span></p> 
        <p class="card__item-size">Size <span class="card__item-size-value">${prodInfo.sizeValue}</span></p>  
        <div class="card__item-numb-price">
          <input type="number" class="card__item-number" value="1" min="1">
          <p class="card__item-price">${prodInfo.price}</p>
        </div>
        <div class="card__item-like">
          <p class="card__item-like-text">Move to</p>
          <button class="card__item-like-btn"> 
            <img class="card__item-like-img" src="img/like.png" alt="">
          </button>
        </div>
      </div>
      <button class="card__item-delete">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83398 2.49967C4.83398 1.5792 5.58018 0.833008 6.50065 0.833008H9.50065C10.4211 0.833008 11.1673 1.5792 11.1673 2.49967V2.83301H14.5007C14.8688 2.83301 15.1673 3.13148 15.1673 3.49967C15.1673 3.86786 14.8688 4.16634 14.5007 4.16634H13.6673V12.4997C13.6673 13.9724 12.4734 15.1663 11.0007 15.1663H5.00065C3.52789 15.1663 2.33398 13.9724 2.33398 12.4997V4.16634H1.50065C1.13246 4.16634 0.833984 3.86786 0.833984 3.49967C0.833984 3.13148 1.13246 2.83301 1.50065 2.83301H4.83398V2.49967ZM6.16732 2.83301H9.83398V2.49967C9.83398 2.31558 9.68475 2.16634 9.50065 2.16634H6.50065C6.31656 2.16634 6.16732 2.31558 6.16732 2.49967V2.83301ZM3.66732 4.16634V12.4997C3.66732 13.2361 4.26427 13.833 5.00065 13.833H11.0007C11.737 13.833 12.334 13.2361 12.334 12.4997V4.16634H3.66732ZM8.00065 5.33301C8.36884 5.33301 8.66732 5.63148 8.66732 5.99967L8.66732 11.9997C8.66732 12.3679 8.36884 12.6663 8.00065 12.6663C7.63246 12.6663 7.33399 12.3679 7.33399 11.9997L7.33398 5.99967C7.33398 5.63148 7.63246 5.33301 8.00065 5.33301Z" fill="#787A80"/>
          </svg>                    
      </button>
      
    </div>
    <div class="card__item-line"></div>`

    document.querySelector('.card__items').insertAdjacentHTML('afterend', cardItemHTML);

    const cardItemDel = document.querySelectorAll('.card__item-delete');

      cardItemDel.forEach( element => 
        element.addEventListener('click', () => {
          document.querySelector('.card__item').remove()
      })

      )

  }

  
    // const prodInCard = document.querySelector(`[data-id='${prodInfo.id}']`)

  
    // if (document.querySelector('.card__item_3').hasAttribute('data-id') == '1' ) {
    //   document.querySelector('.card__value_3').innerText  =
    //   parseInt(document.querySelector('.card__value').innerText) +
    //   parseInt(document.querySelector('.product__item-value').innerText)
    //     console.log(12);
    // } 
    // else {
    //   const cardItemHTML = 
    //   `<div class="card__item" data-id="${prodInfo.id}">
    //     <img class="card__img" src="${prodInfo.img}" alt="">
    //     <div class="card__header">
    //       <p class="card__text">
    //       ${prodInfo.title}
    //       </p>
    //       <p class="card__price">
    //         ${prodInfo.price}
    //       </p>
    //       <p class="card__value">
    //         ${prodInfo.value}
    //       </p>
    //     </div>
    //   </div>`

      
    //   document.querySelector('.card').insertAdjacentHTML('beforeend', cardItemHTML)


//     }

//   }

 })



 

 

  