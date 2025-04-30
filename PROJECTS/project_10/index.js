// const links = document.querySelectorAll('.links')

// links.forEach( (ele)=>{

//     ele.addEventListener('click', handleColick);
    
// } )

const handleColick = (e)=>{
    
    e.preventDefault()

    if( !e.target.getAttribute('href')  ) return;

    const className = e.target.getAttribute('href').substring(0); 
    
    const section = document.querySelector(`.${className}`);
    const dimensions = section.getBoundingClientRect();
    
    window.scrollTo({
        left: 0,
        top: dimensions.top+window.pageYOffset,
        behavior:'smooth'
    })
    
}


// Event Delegation
document.querySelector('.links').addEventListener('click', handleColick);
