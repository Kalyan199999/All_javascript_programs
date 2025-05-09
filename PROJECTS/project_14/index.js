const navbar = document.querySelector(".navbar");

const section_2 = document.querySelector("#section-2");
const section_3 = document.querySelector("#section-3");

const handleEvent = (e,section) =>
{
    // const cords = section.getBoundingClientRect();
    if(window.scrollY > section.offsetTop)
        {
        navbar.classList.add("sticky");
    }
    else{
        navbar.classList.remove("sticky");
    }
}

window.addEventListener("scroll", (e) => {
    
    handleEvent(e,section_2);
    // handleEvent(e,section_3);
    
})