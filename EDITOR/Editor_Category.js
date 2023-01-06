
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


// category model 

let Models = document.querySelector('.from_one_to_seven_DIV')
let category_left_top = document.querySelector('.category_left_top')


let clearActiveModels = function () {
    for (let i = 0; i < 7; i++) {
        let xqc = Models.children[i]
        xqc.classList.remove('activeModel')
    }
}
let Categories_fill_inputs = document.querySelector('.Categories_fill_inputs')


let EditBtn = document.querySelector(`.saveAll`)

function append_LI(Category_link, i) {

    let dropDown_ul = document.querySelector('.DropDown ul')
    let Categories_DropDown = document.querySelector('.Categories_DropDown ul')
    let Category_Block__Name = Category_link;
    let Category_Side__Name = Category_link

    let LI = document.createElement('LI');
    let LI_P = document.createElement('P');

    let LI_Side = document.createElement('LI');
    let A_Side = document.createElement('A');

    A_Side.href = '' //here we add the link

    LI_P.innerText = Category_Block__Name;
    LI_P.classList.add('LI_P')

    A_Side.innerText = Category_Side__Name;
    A_Side.classList.add('A_Side')




    let Link_Line = document.createElement('DIV')
    Link_Line.classList.add('li_Line')

    LI.append(LI_P)
    LI.append(Link_Line)
    dropDown_ul.append(LI)


    LI_Side.append(A_Side);
    Categories_DropDown.append(LI_Side)

    for (let j = 1; j <= i; j++) {

        if (localStorage.getItem(`mainCategory_${i}_value`) === null) {



        } else {
            LI_P.innerText = localStorage.getItem(`mainCategory_${i}_value`)
            A_Side.innerText = localStorage.getItem(`mainCategory_${i}_value`)
        }

    }

    EditBtn.addEventListener('click', function () {


        for (let j = 1; j <= i; j++) {



            let inside_Category_input = document.querySelector(`.inside_Category_${j} input`)
            let theInputValue = inside_Category_input.value

            localStorage.setItem(`mainCategory_${i}_value`, theInputValue)
            LI_P.innerText = localStorage.getItem(`mainCategory_${i}_value`)
            A_Side.innerText = localStorage.getItem(`mainCategory_${i}_value`)


        }




    })



}


function appendCategoryInformation(i) {


    let one_space_edit = document.createElement('DIV')
    one_space_edit.classList.add('one_space_edit')

    let H4 = document.createElement('H4')
    H4.innerText = `Category ${i} :`;


    let inside_Category = document.createElement('DIV')
    inside_Category.classList.add(`inside_Category_${i}`)
    inside_Category.classList.add(`inside_Category`)


    let H5_name = document.createElement('H5')
    H5_name.innerText = 'Category name :';


    let inputCategory_Name = document.createElement('INPUT')
    inputCategory_Name.classList.add('newCategory_input') // type and placeholder to add !

    let H5_image = document.createElement('H5')
    H5_image.innerText = 'Category image :';

    let Parourir_btn = document.createElement('INPUT')
    Parourir_btn.classList.add('Parcourir')
    Parourir_btn.type = 'file'
    Parourir_btn.accept = 'image/*'
    Parourir_btn.innerText = "Parcourir"


    inside_Category.append(H5_name)
    inside_Category.append(inputCategory_Name)
    inside_Category.append(H5_image)
    inside_Category.append(Parourir_btn)

    one_space_edit.append(H4)
    one_space_edit.append(inside_Category)

    Categories_fill_inputs.append(one_space_edit)

    append_LI(`Category ${i}`, i)
}





function clear_LI() {
    let dropDown_ul = document.querySelector('.DropDown ul')
    let Categories_DropDown = document.querySelector('.Categories_DropDown ul')


    dropDown_ul.innerText = ''
    Categories_DropDown.innerText = ''


}






function fillCategory_info(category_block_number, category_Input, imageURL) {


    // localStorage.removeItem(`theInputValue of ${category_Input}`)


    let Category_Block__Image = document.querySelector(`.${category_block_number}`).children[0].children[1]
    let Category_Block__Name = document.querySelector(`.${category_block_number}`).children[0].children[2]

    Category_Block__Image.src = imageURL


    if (localStorage.getItem(`theInputValue of ${category_Input}`) === null) {
        Category_Block__Name.innerText = "Category"
    } else {
        Category_Block__Name.innerText = localStorage.getItem(`theInputValue of ${category_Input}`)

    }

    EditBtn.addEventListener('click', function () {

        let inside_Category_input = document.querySelector(`.${category_Input} input`)
        let theInputValue = inside_Category_input.value
        localStorage.setItem(`theInputValue of ${category_Input}`, theInputValue)

        Category_Block__Name.innerText = localStorage.getItem(`theInputValue of ${category_Input}`)


    })

}



let oldNumber = 0;

function organiseCategories(CategoriesNumber) {
    restoreAllCategories()
    console.log(CategoriesNumber)




    if (CategoriesNumber === 7) {
        fillCategory_info('Category_Block_1', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_2', 'inside_Category_2', '/BackUp/Category2.png')
        fillCategory_info('Category_Block_3', 'inside_Category_3', '/BackUp/Category3.png')
        fillCategory_info('Category_Block_4', 'inside_Category_4', '/BackUp/Category4.png')
        fillCategory_info('Category_Block_5', 'inside_Category_5', '/BackUp/Category5.png')
        fillCategory_info('Category_Block_6', 'inside_Category_6', '/BackUp/Category6.png')
        fillCategory_info('Category_Block_7', 'inside_Category_7', '/BackUp/Category7.png')




    } else if (CategoriesNumber === 6) {
        document.querySelector(`.Category_Block_${7}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_1', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_2', 'inside_Category_2', '/BackUp/Category2.png')
        fillCategory_info('Category_Block_3', 'inside_Category_3', '/BackUp/Category3.png')
        fillCategory_info('Category_Block_4', 'inside_Category_4', '/BackUp/Category4.png')
        fillCategory_info('Category_Block_5', 'inside_Category_5', '/BackUp/Category5.png')
        fillCategory_info('Category_Block_6', 'inside_Category_6', '/BackUp/Category6.png')

    } else if (CategoriesNumber === 5) {
        document.querySelector(`.Category_Block_${7}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${6}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_1', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_2', 'inside_Category_2', '/BackUp/Category2.png')
        fillCategory_info('Category_Block_3', 'inside_Category_3', '/BackUp/Category3.png')
        fillCategory_info('Category_Block_4', 'inside_Category_4', '/BackUp/Category4.png')
        fillCategory_info('Category_Block_5', 'inside_Category_5', '/BackUp/Category5.png')


    } else if (CategoriesNumber === 4) {
        document.querySelector(`.Category_Block_${7}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${6}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${5}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_1', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_2', 'inside_Category_2', '/BackUp/Category2.png')
        fillCategory_info('Category_Block_3', 'inside_Category_3', '/BackUp/Category3.png')
        fillCategory_info('Category_Block_4', 'inside_Category_4', '/BackUp/Category4.png')
    } else if (CategoriesNumber === 3) {

        category_left_top.style.display = 'none'
        // document.querySelector(`.category_right_top`).style.width = '60%'
        // document.querySelector(`.category_right_top`).style.height = '25em'
        document.querySelector(`.Category_Block_${1}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${2}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${3}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${4}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_5', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_6', 'inside_Category_2', '/BackUp/Category2.png')
        fillCategory_info('Category_Block_7', 'inside_Category_3', '/BackUp/Category3.png')

    } else if (CategoriesNumber === 2) {
        category_left_top.style.display = 'none'

        document.querySelector(`.Category_Block_${1}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${2}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${3}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${4}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${5}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_6', 'inside_Category_1', '/BackUp/Category1.png')
        fillCategory_info('Category_Block_7', 'inside_Category_2', '/BackUp/Category2.png')




    } else if (CategoriesNumber === 1) {

        // document.querySelector(`.category_right_top`).style.width = '25em'
        // document.querySelector(`.category_right_top`).style.height = '23em'

        document.querySelector(`.Category_Block_${7}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${6}`).classList.add('hide_Category')
        category_left_top.style.display = 'none'
        document.querySelector(`.Category_Block_${4}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${3}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${2}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${1}`).classList.add('hide_Category')

        fillCategory_info('Category_Block_5', 'inside_Category_1', '/BackUp/Category1.png')




    }
    else if (CategoriesNumber === 0) {

        document.querySelector(`.Category_Block_${7}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${6}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${5}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${4}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${3}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${2}`).classList.add('hide_Category')
        document.querySelector(`.Category_Block_${1}`).classList.add('hide_Category')
    }





}

function restoreAllCategories() {
    category_left_top.style.display = 'flex'
    // document.querySelector(`.category_right_top`).style.width = '47%';
    // document.querySelector(`.category_right_top`).style.height = '40em'


    let allCategories = document.querySelectorAll('.block_category')
    for (oneCategorie of allCategories) {
        oneCategorie.classList.remove('hide_Category')
    }
}

function clearCategoryInformation() {
    Categories_fill_inputs.innerHTML = ''
}

let Model_number = 0
if (JSON.parse(localStorage.getItem('organiseCategories_currentModel')) === null) {
    organiseCategories(0)
} else {
    organiseCategories(JSON.parse(localStorage.getItem('organiseCategories_currentModel')))

}

for (let i = 1; i < JSON.parse(localStorage.getItem('organiseCategories_currentModel')) + 1; i++) {
    appendCategoryInformation(i)


}

Models.addEventListener('click', function (e) {
    clearActiveModels()
    let targeted = e.target
    console.log(targeted)


    if (targeted.classList.contains('numberSquare')) {
        targeted.classList.add('activeModel')
        let Model_number = parseInt(targeted.innerText)

        clearCategoryInformation()
        clear_LI()

        organiseCategories(Model_number)

        localStorage.setItem('organiseCategories_currentModel', Model_number)

        console.log(JSON.parse(localStorage.getItem('organiseCategories_currentModel')))

        for (let i = 1; i < JSON.parse(localStorage.getItem('organiseCategories_currentModel')) + 1; i++) {
            appendCategoryInformation(i)


        }
    }





})




