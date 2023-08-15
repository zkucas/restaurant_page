import bgimg from './br.jpg'


function createLayout(){

    const container = document.querySelector('.content')

    const h1 = document.createElement('h1')
    const topnav = document.createElement('div')
    const contact = document.createElement('button')
    const menu = document.createElement('button')
    const img = document.createElement('img')
    const topbg = document.createElement('div')
  

    topnav.appendChild(menu)
    topnav.appendChild(contact)
    

    container.appendChild(h1)
    container.appendChild(topnav)
    container.appendChild(img)
    container.appendChild(topbg)
    

    img.classList.add("home-img")
    topnav.classList.add("topnav")
    topbg.classList.add("topbg")

    h1.textContent = 'Restaurante Bonsucesso'

    contact.textContent = 'Contact Us'
   

    menu.textContent = 'Menu'
   

   return{menu,contact}
    
}



export {createLayout}