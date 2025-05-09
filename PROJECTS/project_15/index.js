const session = document.querySelector(".clr-sess");
const local = document.querySelector(".clr-local");

// Session Storage

sessionStorage.setItem("username", "Kalyan");

console.log(sessionStorage.getItem("username"));

session.addEventListener("click", () => {

    // Delete the item 
    
    // console.log( "Removed Item:");
    // sessionStorage.removeItem("username");

  sessionStorage.clear();
  console.log("Session Storage Cleared");
})


// Local Storage

const user = {
    name : "Kalyan",
    age : 21,
    dept : 'cse'
}


localStorage.setItem("user" , JSON.stringify(user))

console.log(JSON.parse(localStorage.getItem("user")));


local.addEventListener("click", () => {

    // localStorage.removeItem("user");
    
  localStorage.clear();
  console.log("Local Storage Cleared");
})