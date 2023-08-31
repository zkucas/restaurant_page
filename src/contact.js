

function createContact(){

    const container = document.querySelector('.pcontent')

    const menuList = document.createElement('h1')

    container.appendChild(menuList)
    
    menuList.textContent = 'Av. Teixeira de Castro, 90 - Bonsucesso, Rio de Janeiro - RJ, 21040-010, Brazil'
}

export {createContact}