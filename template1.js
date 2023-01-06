
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





  // const swiper = new Swiper('.swiper', {
  //   // Optional parameters
  //   direction: 'horizontal',
  //   loop: true,
  
  //   // If we need pagination
  //   // pagination: {
  //   //   el: '.swiper-pagination',
  //   // },
  
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  
  //   // And if we need scrollbar
  //       // scrollbar: {
  //       //   el: '.swiper-scrollbar',
  //       // },
  // });
  


  
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









function onLoad(){
  
  // category Navigation on load

  
let categories = document.querySelector('.categories')

function appendCategoryBlocks(model_Number) {
    categories.innerHTML = ''

    for (let i = 1; i <= model_Number; i++) {

        let one_category = document.createElement('DIV')
        one_category.classList.add('one_category')

        let C_Link = document.createElement('A')
        C_Link.href = ''

        let black_on_hover = document.createElement('DIV')
        black_on_hover.classList.add('black_on_hover')

        let C_Image = document.createElement('IMG')
        C_Image.src = `BackUp/Category${i}.png`
        C_Image.alt = i

        let button = document.createElement('BUTTON')
        button.classList.add(`C_name_button_${i}`)
        button.innerHTML = `Category ${i}`

        C_Link.append(black_on_hover)
        C_Link.append(C_Image)
        C_Link.append(button)

        one_category.append(C_Link)

        categories.append(one_category)

    }



}
  
  let DropDown_Ul = document.querySelector('.DropDown ul')
  let Categories_DropDown_Ul = document.querySelector('.Categories_DropDown ul')
  
  function appendCategoryNav(model_Number) {
  
      DropDown_Ul.innerHTML = ''
      Categories_DropDown_Ul.innerHTML = ''
  
      for (let i = 1; i <= model_Number; i++) {
  
          let LI = document.createElement('LI')
          let LI_side = document.createElement('LI')
  
  
          let C_Nav_Link = document.createElement('A')
          C_Nav_Link.href = ''
          let C_NavSide_Link = document.createElement('A')
          C_NavSide_Link.href = ''
          C_NavSide_Link.innerHTML = `Category ${i}`
          C_NavSide_Link.classList.add(`C_name_MainLink_${i}`)
  
  
  
  
          let li_Line = document.createElement('DIV')
          li_Line.classList.add('li_Line')
  
          let Li_P = document.createElement('P')
          Li_P.innerHTML = `Category ${i}`
          Li_P.classList.add(`C_name_SideLink_${i}`)
  
  
  
          // append for mainNav
          C_Nav_Link.append(Li_P)
          C_Nav_Link.append(li_Line)
  
          LI.append(C_Nav_Link)
  
          DropDown_Ul.append(LI)
  
          //append for side Nav
  
          LI_side.append(C_NavSide_Link)
          Categories_DropDown_Ul.append(LI_side)
  
  
  
  
  
      }
  
  }
  
  appendCategoryNav(JSON.parse(localStorage.getItem("model_Number")))
  appendCategoryBlocks(JSON.parse(localStorage.getItem("model_Number")))
  
  
  // Category buttons & nav links get category name 

  document.querySelector(`.category_title`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].title

  if (document.querySelector(`.C_name_button_1`) === null) {
 } else {
     document.querySelector(`.C_name_button_1`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1
     document.querySelector(`.C_name_MainLink_1`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1
     document.querySelector(`.C_name_SideLink_1`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1
 
 }
 
 if (document.querySelector(`.C_name_button_2`) === null) {
 } else {
     document.querySelector(`.C_name_button_2`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2
     document.querySelector(`.C_name_MainLink_2`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2
     document.querySelector(`.C_name_SideLink_2`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2
     
 
 }
 
 if (document.querySelector(`.C_name_button_3`) === null) {
 } else {
     document.querySelector(`.C_name_button_3`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3
     document.querySelector(`.C_name_MainLink_3`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3
     document.querySelector(`.C_name_SideLink_3`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3
     
 
 }
 
 if (document.querySelector(`.C_name_button_4`) === null) {
 } else {
     document.querySelector(`.C_name_button_4`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4
     document.querySelector(`.C_name_MainLink_4`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4
     document.querySelector(`.C_name_SideLink_4`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4
     
 
 }
 
 if (document.querySelector(`.C_name_button_5`) === null) {
 } else {
     document.querySelector(`.C_name_button_5`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5
     document.querySelector(`.C_name_MainLink_5`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5
     document.querySelector(`.C_name_SideLink_5`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5
     
 
 }
 
 if (document.querySelector(`.C_name_button_6`) === null) {
 } else {
     document.querySelector(`.C_name_button_6`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6
     document.querySelector(`.C_name_MainLink_6`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6
     document.querySelector(`.C_name_SideLink_6`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6
     
 
 }
 
 if (document.querySelector(`.C_name_button_7`) === null) {
 } else {
     document.querySelector(`.C_name_button_7`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7
     document.querySelector(`.C_name_MainLink_7`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7
     document.querySelector(`.C_name_SideLink_7`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7
     
 
 }
 
 
  
  
  }
  
  // On load event 
  
  document.addEventListener('DOMContentLoaded', () => {
  
  
        onLoad()
  
  
  
  })