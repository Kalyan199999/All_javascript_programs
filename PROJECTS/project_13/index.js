const navbar = document.querySelector(".navbar");

const eventHandler = (e,opacity)=>{
    if( e.target.classList.contains('nav_link') )
        {
            const currElement = e.target

            // console.log(currElement);
            
    
            const siblings = currElement.closest('.nav_links').querySelectorAll('.nav_link');

            handleElement(currElement)
    
            siblings.forEach( navlink => {
    
                if (currElement != navlink) 
                {
                    navlink.style.opacity = opacity;
                  
                }
            })
            
        }
}

const handleElement = (currElement)=>{

    const sections = document.querySelectorAll('.section');

    sections.forEach( section => {
        section.classList.remove('active');
    })

    const id = currElement.getAttribute('href').substring(1);

    document.querySelector(`#${id}`).classList.add('active')
    
}

navbar.addEventListener("mouseover", (e) => {
    eventHandler(e,0.5)
})

navbar.addEventListener("mouseout", (e) => {
    eventHandler(e,1)
})