
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






let numberSquare = document.querySelectorAll('.numberSquare')


function inputOnLoad() {



    for (let i = 0; i < numberSquare.length; i++) {
        if (numberSquare[i].classList.contains((localStorage.getItem('activeModel')))) {
            numberSquare[i].classList.add('activeModel')


            appendCategoryInputs(numberSquare[i].id)
            appendCategoryBlocks(numberSquare[i].id)
            appendCategoryNav(numberSquare[i].id)

        }

    }





    // input receive their previous values 

    if(JSON.parse(localStorage.getItem('Category_Names')) === null){

    }else{
        document.querySelector(`.C_title_input`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].title

    }


    if (document.querySelector(`.C_name_Input_1`) === null) {
    } else {
        document.querySelector(`.C_name_Input_1`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_1

    }

    if (document.querySelector(`.C_name_Input_2`) === null) {
    } else {
        document.querySelector(`.C_name_Input_2`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_2

    }

    if (document.querySelector(`.C_name_Input_3`) === null) {
    } else {
        document.querySelector(`.C_name_Input_3`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_3

    }

    if (document.querySelector(`.C_name_Input_4`) === null) {
    } else {
        document.querySelector(`.C_name_Input_4`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_4

    }

    if (document.querySelector(`.C_name_Input_5`) === null) {
    } else {
        document.querySelector(`.C_name_Input_5`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_5

    }

    if (document.querySelector(`.C_name_Input_6`) === null) {
    } else {
        document.querySelector(`.C_name_Input_6`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_6

    }

    if (document.querySelector(`.C_name_Input_7`) === null) {
    } else {
        document.querySelector(`.C_name_Input_7`).value = JSON.parse(localStorage.getItem('Category_Names'))[0].name_7

    }


        
 // Category buttons & nav links get category name 


 if(JSON.parse(localStorage.getItem('Category_Names')) === null){

 }else{
    document.querySelector(`.category_title`).innerHTML = JSON.parse(localStorage.getItem('Category_Names'))[0].title

 }


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


numberSquare.forEach((Models) => {

    Models.addEventListener('click', function (e) {

        for (let i = 0; i < numberSquare.length; i++) {
            if (numberSquare[i].classList.contains('activeModel')) {
                numberSquare[i].classList.remove('activeModel')

            }
        }

        let targeted = e.target

        if (targeted.classList.contains('numberSquare')) {
            targeted.classList.add('activeModel')

            let model_Number = targeted.id

            appendCategoryInputs(targeted.id)
            appendCategoryBlocks(targeted.id)
            appendCategoryNav(targeted.id)


            document.querySelector('.saveAll').addEventListener('click', function () {

                localStorage.setItem('activeModel', targeted.classList[1])
                localStorage.setItem('model_Number',model_Number)
            })



        }




    })

}
)

function onReset(){
    localStorage.removeItem('activeModel')
    localStorage.removeItem('model_Number')
    localStorage.removeItem('Category_Names')

    location.reload()
}

function OnSave() {
    let CategoryForm = {
        title : 'Hello',
        name_1: 'Category 1',
        name_2: 'Category 2',
        name_3: 'Category 3',
        name_4: 'Category 4',
        name_5: 'Category 5',
        name_6: 'Category 6',
        name_7: 'Category 7',

    }

    // get input value

    CategoryForm.title = document.querySelector(`.C_title_input`).value

    if (document.querySelector(`.C_name_Input_1`) === null) {
    } else {
        CategoryForm.name_1 = document.querySelector(`.C_name_Input_1`).value
    }

    if (document.querySelector(`.C_name_Input_2`) === null) {
    } else {
        CategoryForm.name_2 = document.querySelector(`.C_name_Input_2`).value
    }

    if (document.querySelector(`.C_name_Input_3`) === null) {
    } else {
        CategoryForm.name_3 = document.querySelector(`.C_name_Input_3`).value
    }

    if (document.querySelector(`.C_name_Input_4`) === null) {
    } else {
        CategoryForm.name_4 = document.querySelector(`.C_name_Input_4`).value
    }

    if (document.querySelector(`.C_name_Input_5`) === null) {
    } else {
        CategoryForm.name_5 = document.querySelector(`.C_name_Input_5`).value
    }

    if (document.querySelector(`.C_name_Input_6`) === null) {
    } else {
        CategoryForm.name_6 = document.querySelector(`.C_name_Input_6`).value
    }

    if (document.querySelector(`.C_name_Input_7`) === null) {
    } else {
        CategoryForm.name_7 = document.querySelector(`.C_name_Input_7`).value
    }










    let Category_Names = []

    Category_Names.push(CategoryForm)
    localStorage.setItem('Category_Names', JSON.stringify(Category_Names))

    
    
    
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



function flashColor(element) {
    document.querySelector(`.${element}`).style.transition = 'all 0.5s'
    document.querySelector(`.${element}`).style.backgroundColor = 'rgb(242, 198, 86)'
    setTimeout(() => {
        document.querySelector(`.${element}`).style.background = 'transparent'
    }, 750)
}

document.addEventListener('DOMContentLoaded', () => {

    inputOnLoad()


    document.querySelector('.saveAll').addEventListener('click', OnSave)
    document.querySelector('.search').addEventListener('click',function(){
        flashColor('category_title')
    })

    document.querySelector('.resetAll').addEventListener('click',onReset)





})


let Categories_fill_inputs = document.querySelector('.Categories_fill_inputs')



function appendCategoryInputs(model_Number) {

    Categories_fill_inputs.innerHTML = ''

    for (let i = 1; i <= model_Number; i++) {

        let one_space_edit = document.createElement('DIV');
        one_space_edit.classList.add("one_space_edit")

        let H4 = document.createElement('H4');
        H4.innerText = `Category ${i}`;

        let C_name_Input = document.createElement('INPUT');
        C_name_Input.classList.add(`C_name_Input_${i}`)
        C_name_Input.placeholder = 'Category Name';
        C_name_Input.type = 'text';


        let C_Image_Input = document.createElement('INPUT');
        C_Image_Input.type = 'file';


        one_space_edit.append(H4)
        one_space_edit.append(C_name_Input)
        one_space_edit.append(C_Image_Input)

        Categories_fill_inputs.append(one_space_edit)
    }
}


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

