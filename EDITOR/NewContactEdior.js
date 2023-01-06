// open close editor 

let Editor = document.getElementById('Editor');
let Edit_space = document.querySelector('#Editor .Edit_space');
let editorLogo = document.querySelector('.editorLogo')

function disable() {
    Editor.style.width = '80px'
    Editor.style.height = '80px'
    Editor.style.borderRadius = '50%'
    Editor.style.top = '5em'
    // Editor.style.right = '10px'
    Editor.style.left = '10px'
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
    // Editor.style.right = '0'
    Editor.style.left = '0'

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


        // map info

        MapLink: document.getElementById('map_link').value,

        // Social values

        Instagram: document.getElementById('Instagram').value,
        Facebook: document.getElementById('Facebook').value,
        Twitter: document.getElementById('Twitter').value,


        //are inputs disabled

        isAdresseDisabled: document.querySelector(`.Adresse_input`).disabled,
        isTel_1Disabled: document.querySelector(`.tel_1_input`).disabled,
        isTel_2Disabled: document.querySelector(`.tel_2_input`).disabled,
        isEmailDisabled: document.querySelector(`.email_input`).disabled,

        isMapDisabled: document.querySelector(`.mapLink_input`).disabled,

        isInstagramDisabled: document.querySelector(`.Instagram_input`).disabled,
        isFacebookDisabled: document.querySelector(`.Facebook_input`).disabled,
        isTwitterDisabled: document.querySelector(`.Twitter_input`).disabled,




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


    // give href value to map link

    document.querySelector('.mapLink_info a').value = JSON.parse(localStorage.getItem('formContact'))[0].MapLink
    document.querySelector('.mapLink_info a').href = JSON.parse(localStorage.getItem('formContact'))[0].MapLink


    // give href value to socials

    document.querySelector('.fb_link').value = JSON.parse(localStorage.getItem('formContact'))[0].Facebook
    document.querySelector('.fb_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Facebook
    document.querySelector('.Insta_link').value = JSON.parse(localStorage.getItem('formContact'))[0].Instagram
    document.querySelector('.Insta_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Instagram
    document.querySelector('.Tweet_link').value = JSON.parse(localStorage.getItem('formContact'))[0].Twitter
    document.querySelector('.Tweet_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Twitter




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

    document.querySelector('.mapLink_input').value = JSON.parse(localStorage.getItem('formContact'))[0].MapLink
    document.querySelector('.mapLink_info a').href = JSON.parse(localStorage.getItem('formContact'))[0].MapLink

    document.querySelector('.Facebook_input').value = JSON.parse(localStorage.getItem('formContact'))[0].Facebook
    document.querySelector('.fb_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Facebook
    document.querySelector('.Instagram_input').value = JSON.parse(localStorage.getItem('formContact'))[0].Instagram
    document.querySelector('.Insta_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Instagram
    document.querySelector('.Twitter_input').value = JSON.parse(localStorage.getItem('formContact'))[0].Twitter
    document.querySelector('.Tweet_link').href = JSON.parse(localStorage.getItem('formContact'))[0].Twitter


    
    // conserve disabled buttons 
if(JSON.parse(localStorage.getItem('formContact'))[0].isAdresseDisabled === true){
    document.querySelector(`.Adresse_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isAdresseDisabled
    document.querySelector('.disable_Adresse').style.backgroundColor = 'gray' 
    document.querySelector(`.Adresse_info`).style.display = 'none'
}

if(JSON.parse(localStorage.getItem('formContact'))[0].isTel_1Disabled === true){
    document.querySelector(`.tel_1_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isTel_1Disabled
    document.querySelector('.disable_Tel_1').style.backgroundColor = 'gray'
    document.querySelector(`.tel_1_info`).style.display = 'none'


}

if(JSON.parse(localStorage.getItem('formContact'))[0].isTel_2Disabled === true){
    document.querySelector(`.tel_2_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isTel_2Disabled
    document.querySelector('.disable_Tel_2').style.backgroundColor = 'gray'
    document.querySelector(`.tel_2_info`).style.display = 'none'


}

if(JSON.parse(localStorage.getItem('formContact'))[0].isEmailDisabled === true){
    document.querySelector(`.email_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isEmailDisabled
    document.querySelector('.disable_email').style.backgroundColor = 'gray'
    document.querySelector(`.email_info`).style.display = 'none'


}

if(JSON.parse(localStorage.getItem('formContact'))[0].isMapDisabled === true){
    document.querySelector(`.mapLink_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isMapDisabled
    document.querySelector('.disable_Map').style.backgroundColor = 'gray'
    document.querySelector(`.mapLink_info`).style.display = 'none'

    document.querySelector(`.Map_file`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isMapDisabled

}

if( JSON.parse(localStorage.getItem('formContact'))[0].isInstagramDisabled === true){
    document.querySelector(`.Instagram_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isInstagramDisabled
    document.querySelector('.disable_Instagram').style.backgroundColor = 'gray'
    document.querySelector(`.Instagram_info`).style.display = 'none'


}

if(JSON.parse(localStorage.getItem('formContact'))[0].isFacebookDisabled === true){
    document.querySelector(`.Facebook_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isFacebookDisabled
    document.querySelector('.disable_Facebook').style.backgroundColor = 'gray'
    document.querySelector(`.Facebook_info`).style.display = 'none'


}

if(JSON.parse(localStorage.getItem('formContact'))[0].isTwitterDisabled === true){
    document.querySelector(`.Twitter_input`).disabled = JSON.parse(localStorage.getItem('formContact'))[0].isTwitterDisabled
    document.querySelector('.disable_Twitter').style.backgroundColor = 'gray'
    document.querySelector(`.Twitter_info`).style.display = 'none'


}


    // DOM (transfer values to page content)

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


// on load for category 

function onLoadCategories() {
    // category Navigation on load

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


    // Categor nav links get category name 

    if (document.querySelector(`.C_name_MainLink_1`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_1`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1
        document.querySelector(`.C_name_SideLink_1`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1

    }

    if (document.querySelector(`.C_name_MainLink_2`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_2`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2
        document.querySelector(`.C_name_SideLink_2`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2


    }

    if (document.querySelector(`.C_name_MainLink_3`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_3`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3
        document.querySelector(`.C_name_SideLink_3`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3


    }

    if (document.querySelector(`.C_name_MainLink_4`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_4`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4
        document.querySelector(`.C_name_SideLink_4`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4


    }

    if (document.querySelector(`.C_name_MainLink_5`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_5`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5
        document.querySelector(`.C_name_SideLink_5`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5


    }

    if (document.querySelector(`.C_name_MainLink_6`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_6`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6
        document.querySelector(`.C_name_SideLink_6`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6


    }

    if (document.querySelector(`.C_name_MainLink_7`) === null) {
    } else {
        document.querySelector(`.C_name_MainLink_7`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7
        document.querySelector(`.C_name_SideLink_7`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7


    }

}

// code to re write professionally 



document.querySelectorAll('.search').forEach(element => {
    element.addEventListener('click', function () {
        flashColor(`contact${element.classList[2]}`)

    })
})

function disableInput(i) {
    disablableBtns[i].style.backgroundColor = "gray"
    document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled = true
    document.querySelector(`.${disablableBtns[i].classList[3]}_info`).style.display = 'none'


    if (disablableBtns[i].classList[3] === 'mapLink') {
        document.getElementById('C_image').disabled = true


    }

}

function enableInput(i) {

    disablableBtns[i].style.backgroundColor = "#FFB800"
    document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled = false
    document.querySelector(`.${disablableBtns[i].classList[3]}_info`).style.display = 'flex'


    if (disablableBtns[i].classList[3] === 'mapLink') {
        document.getElementById('C_image').disabled = false


    }




}

for (let i = 0; i < disablableBtns.length; i++) {
    disablableBtns[i].addEventListener('click', function (e) {
    let isDisabled = document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled

        e.preventDefault()


        

        if (!isDisabled) {

            disableInput(i)
            isDisabled = true;




        } else {

            enableInput(i)
            isDisabled = false


        }


        // console.log(document.querySelector(`.${disablableBtns[i].classList[3]}_input`).disabled)




    })
}








document.addEventListener('DOMContentLoaded', () => {

    onLoadCategories()

    if (JSON.parse(localStorage.getItem('formContact')) === null) {

    } else {
        inputOnLoad()

    }


    document.querySelector('.saveAll').addEventListener('click', addContactInfo)
    document.querySelector('.resetAll').addEventListener('click', resetEverything)


})




