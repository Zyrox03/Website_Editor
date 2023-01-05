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



let Contact_Form;

Contact_Form = {
    Title: 'Contactez-nous !',
    little_description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut amet suscipit et. Facilis optio eligendi sapiente nobis atque, ipsam !",
    NameLabel: "Full name :",
    EmailLabel: "Email :",
    MessageLabel: "Message :",
    SendButton: "Send",

    Adresse: "Axxam n khali",
    Tel_1: "+213 42 09 51 23",
    Tel_2: "+213 42 09 51 23",
    Email: "Chekchouka1804@Algerienne.com ",

    Instagram_Link: 'insta.com',
    Facebook_Link: 'fb.com'

}

// DOM MANUPALTION AND SAVING DATA


function Editing_Input(DOMClass, object, InputClass, SearchElementClass, InputSaveClass, DeleteBtnClass, toDelete) {

    if ((DeleteBtnClass && toDelete) === undefined) {

    } else {
        disable_enable_Element(DeleteBtnClass, toDelete)
    }

    // DOMClass is not a string whithout dot
    let DOM = document.querySelector(`.${DOMClass}`);

    // object must be a string
    // Contact_Form[object] =
    if (localStorage.getItem(`Contact_form[${object}]_Local`) === null) {
        DOM.innerText = Contact_Form[object]
    } else {
        DOM.innerText = localStorage.getItem(`Contact_form[${object}]_Local`)
    }

    DOM.style.transition = 'all 0.5s'

    // not a string whithout dot

    let new_Input = document.querySelector(`.${InputClass}`);
    let SearchElement = document.querySelector(`.${SearchElementClass}`);
    let InputSave = document.querySelector(`.${InputSaveClass}`);

    function flashColor(element) {
        element.style.backgroundColor = 'rgb(242, 198, 86)'
        setTimeout(() => {
            element.style.background = 'transparent'
        }, 750)
    }

    InputSave.addEventListener('click', function () {
        localStorage.setItem(`Contact_form[${object}]_Local`, new_Input.value)
        Contact_Form[object] = localStorage.getItem(`Contact_form[${object}]_Local`)
        DOM.innerText = Contact_Form[object];

    })
    SearchElement.addEventListener('click', function () {
        flashColor(DOM)
    })


}


function disableElement(DOMClass) {
    let DOM = document.querySelector(`.${DOMClass}`);
    DOM.style.display = 'none'
    DOM.value = ''
}
function enableElement(DOMClass) {
    let DOM = document.querySelector(`.${DOMClass}`);
    DOM.style.display = 'flex'
}


function Editing_CheckBox(CheckBox, object, LinkInput, theLink, saveCheckBox) {



    let leCheckBox = document.querySelector(`.${CheckBox}`)
    let Link_input = document.querySelector(`.${LinkInput}`)
    let link = document.querySelector(`.${theLink}`)
    let InputSave = document.querySelector(`.${saveCheckBox}`)

    if (localStorage.getItem(`Contact_form[${object}]_Local`) === null) {
        link["href"] = Contact_Form[object]
    } else {
        link["href"] = localStorage.getItem(`Contact_form[${object}]_Local`)
    }


    InputSave.addEventListener('click', function () {
        // Contact_Form[object] = Link_input.value;
        // link["href"] = Contact_Form[object]


        localStorage.setItem(`Contact_form[${object}]_Local`, Link_input.value)
        console.log(localStorage.getItem(`Contact_form[${object}]_Local`))
        Contact_Form[object] = localStorage.getItem(`Contact_form[${object}]_Local`)
        link["href"] = Contact_Form[object];


    })

    leCheckBox.addEventListener('click', function () {

        if (leCheckBox.checked === true) {


            enableElement(LinkInput)
            enableElement(theLink)



        } else {

            disableElement(LinkInput)
            disableElement(theLink)
            localStorage.removeItem(`Contact_form[${object}]_Local`)
            link["href"] = Contact_Form[object]

        }






    })


}







let perso_info_disable_count = 0;

function disable_enable_Element(DeleteBtnClass, toDelete) {


    let info_perso = document.querySelector('.perso_info')
    let disableBtn = document.querySelector(`.${DeleteBtnClass}`)
    let isDisabled = JSON.parse(localStorage.getItem(`${DeleteBtnClass} isDisabled`))


    if(JSON.parse(localStorage.getItem(`${DeleteBtnClass} isDisabled`)) === null){

        let DOM = document.querySelector(`.${toDelete}`);
        DOM.style.display = 'flex'

        disableBtn.style.backgroundColor = '#FFB800'
        // isDisabled =  !JSON.parse(localStorage.getItem(`isDisabled`))

        console.log('hi')

    }else{
        if (isDisabled === true) {
            let DOM = document.querySelector(`.${toDelete}`);
            DOM.style.display = 'none'
            DOM.value = ''
    
            document.querySelector(`.${DeleteBtnClass}`).style.backgroundColor = 'gray'
    
            localStorage.setItem(`${DeleteBtnClass} isDisabled`, isDisabled)
    
        } else {
            let DOM = document.querySelector(`.${toDelete}`);
            DOM.style.display = 'flex'
    
            disableBtn.style.backgroundColor = '#FFB800'
    
            localStorage.setItem(`${DeleteBtnClass} isDisabled`, isDisabled)
    
        }
    }
  

    // localStorage.removeItem(`${DeleteBtnClass} isDisabled`)


    disableBtn.addEventListener('click', function () {
        if (isDisabled === false) {
            let DOM = document.querySelector(`.${toDelete}`);
            DOM.style.display = 'none'
            DOM.value = ''

            document.querySelector(`.${DeleteBtnClass}`).style.backgroundColor = 'gray'
            perso_info_disable_count++

            isDisabled = true

            localStorage.setItem(`${DeleteBtnClass} isDisabled`, isDisabled)
            console.log(localStorage.getItem(`${DeleteBtnClass} isDisabled`))

        } else {
            let DOM = document.querySelector(`.${toDelete}`);
            DOM.style.display = 'flex'

            disableBtn.style.backgroundColor = '#FFB800'
            perso_info_disable_count--
            isDisabled = false

            localStorage.setItem(`${DeleteBtnClass} isDisabled`, isDisabled)
            console.log(localStorage.getItem(`${DeleteBtnClass} isDisabled`))

        }


        if (perso_info_disable_count === 4) {
            info_perso.style.display = 'none';
        } else {
            info_perso.style.display = 'flex';
        }



    })


}









Editing_Input('contact_title', 'Title', 'newTitle_input', 'searchTitle', 'save_Title');
Editing_Input('little_description', 'little_description', 'newDescription_input', 'search_Description', 'save_description');

Editing_Input('YourName', 'NameLabel', 'NameLabel_input', 'search_NameLabel', 'save_NameLabel')
Editing_Input('YourEmail', 'EmailLabel', 'EmailLabel_input', 'search_EmailLabel', 'save_EmailLabel')
Editing_Input('YourMessage', 'MessageLabel', 'MessageLabel_input', 'search_MessageLabel', 'save_MessageLabel')
Editing_Input('SEND', 'SendButton', 'SendButton_input', 'search_SendButton', 'save_SendButton')




Editing_Input('Adresse1_DIV', 'Adresse', 'Adresse_input', 'search_Adresse', 'save_Adresse', 'disable_Adresse', 'Adresse1')

Editing_Input('tel_1_DIV', 'Tel_1', 'tel_1_input', 'search_Tel_1', 'save_Tel_1', 'disable_Tel_1', 'tel_1')

Editing_Input('tel_2_DIV', 'Tel_2', 'tel_2_input', 'search_Tel_2', 'save_Tel_2', 'disable_Tel_2', 'tel_2')

Editing_Input('email_DIV', 'Email', 'email_input', 'search_email', 'save_email', 'disable_email', 'email_1')




// checkBox 

Editing_CheckBox('CheckBox_Insta', 'Instagram_Link', 'Instagram_Link_input', 'Insta_link', 'save_Links')
Editing_CheckBox('CheckBox_FB', 'Facebook_Link', 'Facebook_Link_input', 'fb_link', 'save_Links')
Editing_CheckBox('CheckBox_tweet', 'Twitter_Link', 'Twitter_Link_input', 'Tweet_link', 'save_Links')






// Category values 


console.log()