const open = document.querySelector(".open-btn");
// const close = document.querySelector(".close-btn");

const openMenu = ()=>{
    const overlay = document.querySelector(".overlay");

    if(open.innerText === "Open"){
        open.innerText = "Close"
        open.style.backgroundColor = "red"
    }
    else{
        open.innerText = "Open"
        open.style.backgroundColor = "green"
    }
    
    overlay.classList.toggle('overlay--active')
}

// const closeMenu = ()=>{
//     const overlay = document.querySelector(".overlay");
//     overlay.classList.remove('overlay--active')
// }

open.addEventListener('click', openMenu);
// close.addEventListener('click', closeMenu);