const h1 = document.querySelector('h1');

console.log(h1);

// Down Traversal

// Get all the child nodes of the h1 element
console.log(h1.childNodes);

// Get the childerens of h1 element
console.log(h1.children);

// Get the first child of h1 element
console.log(h1.firstChild);

// Get the first element child of h1 element
console.log(h1.firstElementChild);

h1.firstElementChild.style.color = 'red'

// Get the last child of h1 element
console.log(h1.lastChild);

// Get the last element child of h1 element
console.log(h1.lastElementChild);


// Up Traversal

// Get the parent node of h1 element
console.log(h1.parentNode);

// Get the parent element of h1 element
console.log(h1.parentElement);

// Get closest element
console.log(h1.closest('.container'));

// Get the previous sibling of h1 element
// console.log(h1.previousSibling);

// Get the previous element sibling of h1 element
console.log(h1.previousElementSibling);

// Get the next sibling of h1 element
// console.log(h1.nextSibling);

// Get the next element sibling of h1 element
console.log(h1.nextElementSibling);
