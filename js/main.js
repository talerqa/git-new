const menuList = document.querySelector('.header')
const activeMenu = document.querySelector('.menu__active');

// Активное меню
menuList.addEventListener('click', event => {
   if (event.target.closest('.menu__link')) {
      activeMenu.classList.add('menu__active--active');
      document.querySelector('.main').classList.add('dark__theme');
      document.querySelector('.footer').classList.add('dark__theme');
      document.querySelector('body').style.overflow = 'hidden'
   } 

})
const body = document.querySelector('body')

// Закрытие меню при кликах вне меню
document.addEventListener('click', event => { 
  if (!event.target.closest('.menu__link') && !event.target.closest('.menu__active--active')) {
   activeMenu.classList.remove('menu__active--active');
   document.querySelector('.main').classList.remove('dark__theme')
   document.querySelector('.footer').classList.remove('dark__theme')
   document.querySelector('body').style.overflow =  'visible'
  }
})

// Закртыие меню при эскей
document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      activeMenu.classList.remove('menu__active--active');
      document.querySelector('.main').classList.remove('dark__theme')
      document.querySelector('.footer').classList.remove('dark__theme')
      document.querySelector('body').style.overflow = 'visible';
    }
})
   
const $money = document.querySelector('.header__top-money')
const $activeMoney = document.querySelector('.header__money');


// Валюта меню !!!!

document.addEventListener('click', event => {   
  if (event.target.closest('.header__money-show')) {
    $activeMoney.classList.toggle('header__top-money__inner--active');   
  } 
  
  if(!event.target.closest('.header__money-show') && !event.target.closest('.header__money-item')) {
    $activeMoney.classList.remove('header__top-money__inner--active');   
  }
  
})

$money.addEventListener('mouseleave', event => {
    $activeMoney.classList.remove('header__top-money__inner--active');   
}) 

const passWord = document.querySelectorAll('.modal-window__password-text');
const showPassword = document.querySelectorAll('.sign-in__btn-eye');
const showPassw = document.querySelectorAll('.sign-up__btn-eye');

  function showPass() {
  

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
  const user = document.querySelector('.header__user');
  const logIn = document.querySelector('.sign-in');
  const theme = document.querySelector('.theme');
  const signUp = document.querySelector ('.sign-up');

  document.addEventListener('click', event => {
    if (event.target.closest('.header__user-link__login') || 
      event.target.closest('.header__user-btn')) {
      body.style.overflow = 'hidden';
      document.querySelector('.theme').classList.add('dark__theme_log');
      logIn.classList.add('sign-in--active');
    }
    if(event.target.closest('.header__user-link__registration')) {
      signUp.classList.add('sign-up--active');
      body.style.overflow = 'hidden';
      document.querySelector('.theme').classList.add('dark__theme_log');
    }
  })

// Закрытие модального окна 

document.addEventListener('click', event => {
  if(event.target.closest('.sign-in__close') || event.target.closest('.theme')) {
    logIn.classList.remove('sign-in--active');
    document.querySelector('.theme').classList.remove('dark__theme_log');
    document.querySelector('body').style.overflow = 'visible';
    passWord.forEach(element => {
      element.setAttribute('type', 'password')
      element.value = "";
    });
  }

  if(event.target.closest('.sign-up__close') || event.target.closest('.theme')) {
    signUp.classList.remove('sign-up--active');
    document.querySelector('.theme').classList.remove('dark__theme_log');
    document.querySelector('body').style.overflow = 'visible';
    passWord.forEach(element => {
      element.setAttribute('type', 'password');
      element.value = "";
    });  
  }
}) 


$('.hero-slider').slick({
  dots: true,
  swipe: false,
 
});

$('.arrivals-slider').slick({
  dots: true,
  arrows:false,
})





 




