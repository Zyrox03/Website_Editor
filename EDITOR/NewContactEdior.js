// open close editor 

let Editor = document.getElementById('Editor');
let Edit_space = document.querySelector('#Editor .Edit_space');
let editorLogo = document.querySelector('.editorLogo')

function disable() {
    Editor.style.width = '80px'
    Editor.style.height = '80px'
    Editor.style.borderRadius = '50%'
    Editor.style.top = '5em'
    Editor.style.right = '10px'
    // Editor.style.left = '10px'
    Editor.style.cursor = 'pointer'
    Editor.style.overflow = 'hidden'

    Edit_space.style.display = 'none'
    editorLogo.style.display = 'flex'

}


function enable() {
    Editor.style.width = '20em'
    Editor.style.height = '100vh'
    Editor.style.borderRadius = '0%'
    Editor.style.top = '0'
    Editor.style.right = '0'
    // Editor.style.left = '0'

    Editor.style.cursor = 'default'
    Editor.style.overflowY = 'scroll'

    Edit_space.style.display = 'flex'
    editorLogo.style.display = 'none'




}



window.addEventListener('click', function (e) {

    if (Editor.contains(e.target) || e.target === Editor) {

    } else {
        disable()
    }
});




// DOM & Data storage 

let disablableBtns = document.querySelectorAll('.disablable')


let contactForm = [];

let addContactInfo = (e) => {
    e.preventDefault();

    let contactFormInfo = {

        Title: document.getElementById('Title').value,
        Description: document.getElementById('Description').value,
        Name_Label: document.getElementById('Name_Label').value,
        Email_Label: document.getElementById('Email_Label').value,
        Message_Label: document.getElementById('Message_Label').value,
        SendBtn_Label: document.getElementById('SendBtn_Label').value,
        Adresse: document.getElementById('Adresse').value,
        Tel_1: document.getElementById('Tel_1').value,
        Tel_2: document.getElementById('Tel_2').value,
        Email: document.getElementById('Email').value,

        // checked values
        Instagram_isChecked: document.getElementById('Instagram_isChecked').checked,
        Instagram: document.getElementById('Instagram').value,
        Facebook_isChecked: document.getElementById('Facebook_isChecked').checked,
        Facebook: document.getElementById('Facebook').value,
        Twitter_isChecked: document.getElementById('Twitter_isChecked').checked,
        Twitter: document.getElementById('Twitter').value,

        

    }

    contactForm = []
    contactForm.push(contactFormInfo)


    localStorage.setItem('formContact', JSON.stringify(contactForm))



    

    document.querySelector('.contact_title').innerHTML = document.getElementById('Title').value
    document.querySelector('.contact_description').innerHTML = document.getElementById('Description').value
    document.querySelector('.YourName').innerHTML = document.getElementById('Name_Label').value
    document.querySelector('.YourEmail').innerHTML = document.getElementById('Email_Label').value
    document.querySelector('.YourMessage').innerHTML = document.getElementById('Message_Label').value
    document.querySelector('.SEND').innerHTML = document.getElementById('SendBtn_Label').value
    document.querySelector('.Adresse1_DIV').innerHTML = document.getElementById('Adresse').value
    document.querySelector('.tel_1_DIV').innerHTML = document.getElementById('Tel_1').value
    document.querySelector('.tel_2_DIV').innerHTML = document.getElementById('Tel_2').value
    document.querySelector('.email_DIV').innerHTML = document.getElementById('Email').value



}

let resetEverything = () => {
    localStorage.removeItem('formContact')

    location.reload()
}

function flashColor(element) {
    document.querySelector(`.${element}`).style.transition = 'all 0.5s'
    document.querySelector(`.${element}`).style.backgroundColor = 'rgb(242, 198, 86)'
    setTimeout(() => {
        document.querySelector(`.${element}`).style.background = 'transparent'
    }, 750)
}

function isCheckbox(e) {
    e.preventDefault()
    let checkBox = e.target

    let isChecked = checkBox.checked
    let socialInput = document.querySelector(`.${checkBox.classList[0]}_Link_input`)
    if (isChecked === true) {
        socialInput.disabled = false
    } else {
        socialInput.disabled = true

    }
    return socialInput;
}




function inputOnLoad() {

    //conserve data stored in inputs

    document.getElementById('Title').value = JSON.parse(localStorage.getItem('formContact'))[0].Title
    document.getElementById('Description').value = JSON.parse(localStorage.getItem('formContact'))[0].Description
    document.getElementById('Name_Label').value = JSON.parse(localStorage.getItem('formContact'))[0].Name_Label
    document.getElementById('Email_Label').value = JSON.parse(localStorage.getItem('formContact'))[0].Email_Label
    document.getElementById('Message_Label').value = JSON.parse(localStorage.getItem('formContact'))[0].Message_Label
    document.getElementById('SendBtn_Label').value = JSON.parse(localStorage.getItem('formContact'))[0].SendBtn_Label
    document.getElementById('Adresse').value = JSON.parse(localStorage.getItem('formContact'))[0].Adresse
    document.getElementById('Tel_1').value = JSON.parse(localStorage.getItem('formContact'))[0].Tel_1
    document.getElementById('Tel_2').value = JSON.parse(localStorage.getItem('formContact'))[0].Tel_2
    document.getElementById('Email').value = JSON.parse(localStorage.getItem('formContact'))[0].Email

    document.getElementById('Instagram_isChecked').checked = JSON.parse(localStorage.getItem('formContact'))[0].Instagram_isChecked
    document.getElementById('Instagram').value = JSON.parse(localStorage.getItem('formContact'))[0].Instagram
    document.getElementById('Facebook_isChecked').checked = JSON.parse(localStorage.getItem('formContact'))[0].Facebook_isChecked
    document.getElementById('Facebook').value = JSON.parse(localStorage.getItem('formContact'))[0].Facebook
    document.getElementById('Twitter_isChecked').checked = JSON.parse(localStorage.getItem('formContact'))[0].Twitter_isChecked
    document.getElementById('Twitter').value = JSON.parse(localStorage.getItem('formContact'))[0].Twitter



    // DOM (transfer values to page content)

    if (JSON.parse(localStorage.getItem('formContact')) === null) {

    } else {
        document.querySelector('.contact_title').innerHTML = document.getElementById('Title').value
        document.querySelector('.contact_description').innerHTML = document.getElementById('Description').value
        document.querySelector('.YourName').innerHTML = document.getElementById('Name_Label').value
        document.querySelector('.YourEmail').innerHTML = document.getElementById('Email_Label').value
        document.querySelector('.YourMessage').innerHTML = document.getElementById('Message_Label').value
        document.querySelector('.SEND').innerHTML = document.getElementById('SendBtn_Label').value
        document.querySelector('.Adresse1_DIV').innerHTML = document.getElementById('Adresse').value
        document.querySelector('.tel_1_DIV').innerHTML = document.getElementById('Tel_1').value
        document.querySelector('.tel_2_DIV').innerHTML = document.getElementById('Tel_2').value
        document.querySelector('.email_DIV').innerHTML = document.getElementById('Email').value





    }



    if (document.getElementById('Instagram_isChecked').checked === true) {
        document.querySelector('.Instagram_Link_input').disabled = false
    } else {
        document.querySelector('.Instagram_Link_input').disabled = true

    }

    if (document.getElementById('Facebook_isChecked').checked === true) {
        document.querySelector('.Facebook_Link_input').disabled = false
    } else {
        document.querySelector('.Facebook_Link_input').disabled = true

    }

    if (document.getElementById('Twitter_isChecked').checked === true) {
        document.querySelector('.Twitter_Link_input').disabled = false
    } else {
        document.querySelector('.Twitter_Link_input').disabled = true

    }


    for(let i = 0; i<disablableBtns.length; i++){
    
          if(document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled === true){
        console.log('hi')
          }else{
            console.log('game')
          }
        }
    
    


  

}


// code to re write professionally 



document.querySelectorAll('.CheckBox').forEach(element => {
    element.addEventListener('change', isCheckbox)

});
document.querySelectorAll('.search').forEach(element => {
    element.addEventListener('click', function () {
        flashColor(`contact${element.classList[2]}`)

    })
})


for(let i = 0; i<disablableBtns.length; i++){
    let isDisabled = false
    disablableBtns[i].addEventListener('click',function(e){
        e.preventDefault()
      if(isDisabled === false){

        disablableBtns[i].style.backgroundColor ="gray"
        document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled = true
        // disablableBtns[i].classList.add('thisBtnDisabled')
        localStorage.setItem(`isBtnDisabled_${disablableBtns[i].classList[3]}_input}`,document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled)

        isDisabled = true
      }else{

        disablableBtns[i].style.backgroundColor ="#FFB800"
        document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled = false
        // disablableBtns[i].classList.remove('thisBtnDisabled')
        localStorage.setItem(`isBtnDisabled_${disablableBtns[i].classList[3]}_input}`,document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled)


        isDisabled = false

      }
    })
}








document.addEventListener('DOMContentLoaded', () => {

    if (JSON.parse(localStorage.getItem('formContact')) === null) {

    } else {
        inputOnLoad()

    }


    document.querySelector('.saveAll').addEventListener('click', addContactInfo)
    document.querySelector('.resetAll').addEventListener('click', resetEverything)


})



