const btn_1 = document.querySelector('#btn-1');
const btn_2 = document.querySelector('#btn-2');
const btn_3 = document.querySelector('#btn-3');


const removeActive = () => {
    
    const tabs = document.querySelectorAll('.tab-container');
    console.log(tabs);

    tabs.forEach((tab) => {
        tab.classList.remove('active');
    })
    
}

btn_1.addEventListener('click', () => {
    
    removeActive()
    
    
    const tab_1 = document.querySelector('.container-2');
    tab_1.classList.add('active');
    console.log(tab_1);
    
})

btn_2.addEventListener('click', () => {
    
    removeActive()
    
    const tab_2 = document.querySelector('.container-3');
    tab_2.classList.add('active');
    console.log(tab_2);
    
})

btn_3.addEventListener('click', () => {
    
    removeActive()
    
    const tab_3 = document.querySelector('.container-4');
    tab_3.classList.add('active');
    console.log(tab_3);
    
})