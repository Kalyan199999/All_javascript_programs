// Evet Bubbling and Capturing

const parent = document.querySelector(".parent");
const btn_1 = document.querySelector(".btn-1");
const btn_2 = document.querySelector(".btn-2");
const btn_3 = document.querySelector(".btn-3");
const content = document.querySelector(".content");

// Bubbling--> The event happens to child element and then starts move to parent element 

// Capturing --> First check for parent element and then comes for child element

btn_1.addEventListener("click", () => {
    console.log("btn-1 clicked");
    content.textContent = "btn-1 clicked";
})

btn_2.addEventListener("click", () => {
    console.log("btn-2 clicked");
    content.textContent = "btn-2 clicked";
})

btn_3.addEventListener("click", () => {
    console.log("btn-3 clicked");
    content.textContent = "btn-3 clicked";
})

parent.addEventListener("click", () => {
    console.log("parent clicked");
    content.textContent = "parent clicked";
},true)
