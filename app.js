let bars = document.querySelector('.humlogo i ');
// let xMark = document.querySelector('.xMark i');
let navSide = document.querySelector('.navSide')

let isClicked = false;

bars.addEventListener('click', function () {
    if (isClicked === false) {
        navSide.style.transform = 'translateX(0%)';
        bars.style.color = "#fa8920"
        isClicked = true
    } else {
        navSide.style.transform = 'translateX(-100%)';
        bars.style.color = "white"

        isClicked = false
    }

})




const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    //     scrollbar: {
    //       el: '.swiper-scrollbar',
    //     },
  });
  
