
function createMenu(){

    const container = document.querySelector('.pcontent')

    const menuList = document.createElement('div')
    const imgx = document.createElement('img')
    const imgx2 = document.createElement('img')
    const menuText = document.createElement('p')
    const menuText2 = document.createElement('p')

    imgx.src = "https://sundaysuppermovement.com/wp-content/uploads/2019/07/picanha-steak-recipe-hero.jpg";
    imgx2.src = "https://www.curiouscuisiniere.com/wp-content/uploads/2019/04/Feijoada-Brazilian-Black-Bean-Stew-pin.jpg.webp"

    container.appendChild(menuList)
    container.appendChild(menuText)
    container.appendChild(imgx)
    container.appendChild(menuText2)
    container.appendChild(imgx2)

    menuText.textContent = "Picanha R$30"
    menuText2.textContent = "Feijoada R$20"

    menuList.classList.add('menu')
    imgx.classList.add('images')
    imgx2.classList.add('images')
}

export {createMenu}