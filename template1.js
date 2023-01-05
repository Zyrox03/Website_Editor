
// top nav on scroll 


var myNav = document.getElementById('topNav');




var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) {

    myNav.style.height = '0em';

  }
  else {

    myNav.style.height = '2em';

  }
  
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector('nav').style.top = "0em";
  } else {
    document.querySelector('nav').style.top = "-7em";
  }
  prevScrollpos = currentScrollPos;
} 



// slider

let img_slider = document.getElementsByClassName('img_slider')
let bars = document.getElementsByClassName('bar')

let etape = 0;

let nbr_img = img_slider.length;



function enleverActiveImages(){
    for(let i=0; i< nbr_img; i++){
        img_slider[i].classList.remove('active');
    }
}

function enleverActiveBars(){
    for(let i=0; i< nbr_img; i++){
        bars[i].classList.remove('active');
    }
}

let precedent = document.querySelector('.precedent')
let next = document.querySelector('.next')


function goNext(){
    etape++;

    if(etape>= nbr_img){
        etape= 0;
    }
    enleverActiveImages();
    enleverActiveBars()
    img_slider[etape].classList.add('active')
    bars[etape].classList.add('active')
}

function goPrev(){
    etape--;

    if(etape < 0){
        etape = nbr_img - 1;
    }
    enleverActiveImages();
    enleverActiveBars()
    img_slider[etape].classList.add('active')
    bars[etape].classList.add('active')
}





next.addEventListener('click',function(){
    goNext()
})



precedent.addEventListener('click',function(){
    goPrev()
})


setInterval(function(){
    goNext()
},6000)



// swipe main slider

let touchstartX = 0
let touchendX = 0
    
function checkDirection() {
  if (touchendX < touchstartX){
    goNext()
  }
  if (touchendX > touchstartX){
    goPrev()
  }
}

document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})







// Load more

let loadButtons = document.querySelectorAll('.LoadMore button');


loadButtons.forEach((loadButton) => {
    loadButton.addEventListener('click', function () {
        let products = loadButton.parentElement.parentElement;
        loadButton.style.display = 'none';
        products.children[2].style.display = 'flex'




    })
})


let one_product = document.querySelectorAll('.one_product')



one_product.forEach((prod) => {
    
    let productImage = prod.children[0].children[0].children[1];

    prod.addEventListener('mouseover', function () {


        // productImage.style.transform =' translateY(100%)';

        productImage.nextElementSibling.style.opacity ='0';
        productImage.style.transform ='scale(1.1)';

    
       



        prod.addEventListener('mouseout', function () {
            productImage.nextElementSibling.style.opacity ='1';
            productImage.style.transform ='scale(1)';





        })
    })
})



// sideNav 

let humbars = document.querySelector('.humbars i');
let sideNav = document.querySelector('.navSide');
let shadowing = document.querySelector('.shadowing')

function disable() {
    document.body.classList.add("stop-scrolling-gotIt");
    shadowing.classList.remove('hide')
}


function enable() {
    document.body.classList.remove("stop-scrolling-gotIt");
    shadowing.classList.add('hide')



}


humbars.addEventListener('click',function(){
   
        sideNav.style.transform = 'translateX(0)'
        disable()

    
    
})

window.addEventListener('click', function(e){   
    if (sideNav.contains(e.target) || e.target === humbars ){
    } else{
        sideNav.style.transform = 'translateX(-100%)'
        enable()

    }
  });





  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
        // scrollbar: {
        //   el: '.swiper-scrollbar',
        // },
  });
  


  
// category navSide on click

let Category_navLink = document.querySelector('.Category_navLink')
let Categories_DropDown = document.querySelector('.Categories_DropDown')
let Category_navLinkI = document.querySelector('.Category_navLink i')

let isDropped = false;
Category_navLink.addEventListener('click',function(){
  
  if(isDropped === false){
    Categories_DropDown.style.display = 'flex'
    Category_navLinkI.style.transform = 'rotate(90deg)'
    isDropped = true
  }else{
    Categories_DropDown.style.display = 'none'
    Category_navLinkI.style.transform = 'rotate(0)'
    isDropped = false;
  }
})