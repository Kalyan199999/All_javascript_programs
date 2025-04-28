const header = document.querySelector('.header');
let count = 1;

const mouseEvent = ()=>{
    // console.log(count);
    alert(`This is a Mouse alert and mouse count is:${count}`)
    count++

    // restricting the mouse event to one time
    // header.removeEventListener('mouseenter', mouseEvent)
}

header.addEventListener('mouseenter', mouseEvent )

// header.onmouseenter = mouseEvent