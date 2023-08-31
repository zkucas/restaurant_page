import css from "../dist/styles.css"
import { createLayout } from "./createLayout"
import { createMenu } from "./menu"
import { createContact } from "./contact";

const mainLayout = createLayout();


function rem(){
    const allx = document.querySelector('.pcontent')
    const allx2 = allx.querySelectorAll(":scope > *")
    
    if (allx2.length > 0){
        allx2.forEach((e) => {
            e.classList.add('hide')
        })
    }

}


mainLayout.menu.addEventListener("click", e =>{
    rem()
    createMenu()
})

mainLayout.contact.addEventListener("click", e =>{
    rem()
    createContact()
})

mainLayout.h1.addEventListener("click", e =>{
    rem()
})


