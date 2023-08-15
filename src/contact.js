

function createContact(){

    const container = document.querySelector('.topbg')

    const menuList = document.createElement('h1')

    container.appendChild(menuList)
    
    menuList.textContent = 'TEST CONTACT'
}

export {createContact}