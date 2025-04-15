const open = document.querySelector(".open-btn");
const close = document.querySelector(".close-btn");

const openMenu = ()=>{
    const overlay = document.querySelector(".overlay");
    overlay.classList.add('overlay--active')
}

const closeMenu = ()=>{
    const overlay = document.querySelector(".overlay");
    overlay.classList.remove('overlay--active')
}

open.addEventListener('click', openMenu);
close.addEventListener('click', closeMenu);