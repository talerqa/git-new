const menuList = document.querySelector('.header')
const activeMenu = document.querySelector('.menu__active');

// Активное меню
menuList.addEventListener('click', event => {
   if (event.target.closest('.menu__link')) {
      activeMenu.classList.add('menu__active--active')
      document.querySelector('.main').classList.add('dark__theme')
      document.querySelector('.footer').classList.add('dark__theme')
   } 

})

// Закрытие меню при кликах вне меню
document.querySelector('body').addEventListener('click', event => { 
  if (!event.target.closest('.menu__link') && !event.target.closest('.menu__active--active')) {

   activeMenu.classList.remove('menu__active--active');
   document.querySelector('.main').classList.remove('dark__theme')
   document.querySelector('.footer').classList.remove('dark__theme')
   document.querySelector('body').style.overflow = 'visible';
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

document.querySelector('body').addEventListener('click', event => {   
  if (event.target.closest('.header__top-money')) {
    $activeMoney.classList.add('header__top-money__inner--active');   
  }

  
})

document.querySelector('.header__top-money').addEventListener('mouseover', event => {
  if (event.target.closest('.header__top-money') && event.target.closest('header__top-money__inner--active')){
     $activeMoney.classList.remove('header__top-money__inner--active');   
    }
}) 

  // $money.addEventListener('click', event =>{
  //   if (event.target.closest('.header__top-money')) {
      
  //     $activeMoney.classList.add('header__top-money__inner--active');      
  //     if(event.target.closest('.header__top-money__inner--active')){
  //       console.log(12);
  //     }
  //   }    
  // })





// скрытие\ показ паролья 

function showPass() {
  const passWord = document.querySelector('.modal-window__password')
  const showPassword = document.querySelector('.modal-window__password-text')

  passWord.addEventListener('click', event => {
    if (showPassword.getAttribute('type') === 'password') {
      showPassword.setAttribute('type', 'text')
    } 
    else {
      showPassword.setAttribute('type', 'password')
    }
    
  })
  passWord.defaultPrevent
  
}
showPass()



// С помоўью цікла скрывает все, не удобно

// const passWord = document.querySelectorAll('.modal-window__password');
// const showPassword = document.querySelectorAll('.modal-window__password-text');

// for (let i = 0; i < passWord.length; i++) {
//   passWord[i].addEventListener('click', event => {
    
//     for (let a = 0; a < showPassword.length; a++) {
//       if (showPassword[a].getAttribute('type') === 'password') {
//         showPassword[a].setAttribute('type', 'text')
//       } 
//       else {
//         showPassword[a].setAttribute('type', 'password')
//       }
//       passWord.defaultPrevent
      
//     }


//   })

// }



/// Модальное окно
const user = document.querySelector('.header__user');
const logIn = document.querySelector('.sign-in');
const theme = document.querySelector('.theme');
const signUp = document.querySelector ('.sign-up');

user.addEventListener('click', event => {
  if (event.target.closest('.header__user-link__login') || 
  event.target.closest('.header__user-btn')) {
    logIn.classList.add('sign-in--active');
    document.querySelector('.theme').classList.add('dark__theme_log');
    document.querySelector('body').style.overflow = 'hidden';
  }

  if(event.target.closest('.header__user-link__registration')) {
    signUp.classList.add('sign-up--active');
    document.querySelector('.theme').classList.add('dark__theme_log');
    document.querySelector('body').style.overflow = 'hidden';
  }

})

// Закрытие модального окна 

document.querySelector('body').addEventListener('click', event => {
  if(event.target.closest('.sign-in__close') || event.target.closest('.theme')) {
    logIn.classList.remove('sign-in--active');
    document.querySelector('.theme').classList.remove('dark__theme_log');
    document.querySelector('body').style.overflow = 'visible';
  }

  if(event.target.closest('.sign-up__close') || event.target.closest('.theme')) {
    signUp.classList.remove('sign-up--active');
    document.querySelector('.theme').classList.remove('dark__theme_log');
    document.querySelector('body').style.overflow = 'visible';
  }




}) 







 




