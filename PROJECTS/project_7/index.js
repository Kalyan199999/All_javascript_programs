const sec_1 = document.querySelector(".section-1");
const sec_2 = document.querySelector(".section-2");
const sec_3 = document.querySelector(".section-3");

const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");


btn_1.addEventListener("click", () => {

    const sec_2_cord = sec_2.getBoundingClientRect();

    window.scrollTo({
        left: 0,
        top: sec_2_cord.top+window.pageYOffset,
         behavior:'smooth'
    })
    

})

btn_2.addEventListener("click", () => {

    const sec_3_cord = sec_3.getBoundingClientRect();

    // window.scrollTo({
    //     left: 0,
    //     top: sec_3_cord.top+window.pageYOffset,
    //      behavior:'smooth'
    // })

    sec_3.scrollIntoView({
        behavior:'smooth'
    })

   
})


btn_3.addEventListener("click", () => {

    const sec_1_cord = sec_1.getBoundingClientRect();

    window.scrollTo({
        left: 0,
        top: sec_1_cord.top+window.pageYOffset,
        behavior:'smooth'
    })
})
