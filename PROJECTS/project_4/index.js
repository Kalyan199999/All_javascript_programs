const add_btn = document.querySelector(".add-btn");

const show_btn = document.querySelector(".show-btn");

const clear_btn = document.querySelector(".clear-btn");

const input = document.querySelector(".input-field");

const all_items = document.querySelector(".all-items");

const handleClick = ()=>{

    if(input.value == ""){
        alert("Please Enter Something")
        return;
    }
    
    addItems()
    input.value = "";
}


const addItems = ()=>{

    const items = getItems()

    items.push(input.value)

    localStorage.setItem( "items", JSON.stringify(items) )

    show_Items()

}

const getItems = ()=>{

    const items = JSON.parse( localStorage.getItem("items") ) || [];
    return items;
}


const show_Items = ()=>{

    const items = getItems();

    all_items.innerHTML = "";

    items.forEach(item => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.textContent = item;
        all_items.appendChild(div);
      });
}

add_btn.addEventListener("click",handleClick)
show_btn.addEventListener("click" ,show_Items)
clear_btn.addEventListener("click" , ()=>{

    localStorage.clear();
    show_Items();
})