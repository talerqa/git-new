

const menuList = document.querySelector('.header')
const activeMenu = document.querySelector('.menu__active');
menuList.addEventListener('click', event => {
   if (event.target.closest('.menu__link')) {
      activeMenu.classList.add('menu__active--active')
      document.querySelector('.main').classList.add('dark__theme')
      document.querySelector('.footer').classList.add('dark__theme')
   } 

   if (!event.target.closest('.menu__link') && !event.target.closest('.menu__active')) {
    activeMenu.classList.remove('menu__active--active');
    document.querySelector('.main').classList.remove('dark__theme')
    document.querySelector('.footer').classList.remove('dark__theme')
   }
})

document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape') {
      activeMenu.classList.remove('menu__active--active');
    }
})
   
const $money = document.querySelector('.header__top-money')
const $activeMoney = document.querySelector('.header__money');

  $money.addEventListener('click', event =>{
    if (event.target.closest('.header__top-money')) {
      
      $activeMoney.classList.toggle('header__top-money__inner--active');
    }
   
    // if (!event.target.closest('.header__top-money') && !event.target.closest('.header__top-money__inner--active')) {
    //   $activeMoney.classList.remove('header__top-money__inner--active');
    // }

    // if(event.target )
   
  })

// Ненормально сделано


////!!!!!!!
function showPass() {
  const passWord = document.querySelector('.sign-in__password')
  const showPassword = document.querySelector('.sign-in__password-text')
  
  passWord.addEventListener('click', event => {
    if (showPassword.getAttribute('type') === 'password') {
      showPassword.setAttribute('type', 'text')
    } 
    else {
      showPassword.setAttribute('type', 'password')
    }
  })
}
showPass()








 




