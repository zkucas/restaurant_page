

function createMenu(){

    const container = document.querySelector('.topbg')

    const menuList = document.createElement('h1')

    container.appendChild(menuList)
    
    menuList.textContent = 'TEST MENU'
}

export {createMenu}