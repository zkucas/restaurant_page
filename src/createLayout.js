import bgimg from './br.jpg'


function createLayout(){

    const container = document.querySelector('.content')

    const topBar = document.createElement('div')
    const h1 = document.createElement('h1')
    const topnav = document.createElement('div')
    const contact = document.createElement('button')
    const menu = document.createElement('button')
    const img = document.createElement('img')
    const topbg = document.createElement('div')
    const pageContent = document.createElement('div')
  

    topnav.appendChild(menu)
    topnav.appendChild(contact)

    topBar.appendChild(h1)
    topBar.appendChild(topnav)
    

  
    container.appendChild(topBar)
    container.appendChild(img)
    container.appendChild(topbg)
    container.appendChild(pageContent)
    

    img.classList.add("home-img")
    topnav.classList.add("topnav")
    topBar.classList.add('topBar')
    
    pageContent.classList.add('pcontent')

    h1.textContent = 'Restaurante Bonsucesso'

    contact.textContent = 'Contact Us'
   

    menu.textContent = 'Menu'
   

   return{menu,contact}
    
}



export {createLayout}