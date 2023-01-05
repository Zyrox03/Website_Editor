
// main nav on scroll
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


humbars.addEventListener('click', function () {

    sideNav.style.transform = 'translateX(0)'
    disable()



})

window.addEventListener('click', function (e) {
    if (sideNav.contains(e.target) || e.target === humbars) {
    } else {
        sideNav.style.transform = 'translateX(-100%)'
        enable()

    }
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