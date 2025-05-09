// const url = "https://en.wikipedia.org/w/rest.php/v1/search/page?q=earth&limit=10";

// async function getdata() {
//   try {
//     const res = await fetch(url);

//     // Check if the response is OK
//     if (!res.ok) {
//       throw new Error(`HTTP error! status: ${res.status}`);
//     }

//     const data = await res.json();
//     console.log("Data:", data);
//   } catch (error) {
//     console.error("Fetch error:", error);
//   }
// }

// getdata();



// const fetch = require('node-fetch');

const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
const options = {
  method: 'GET',
  headers: {
    'x-rapidapi-key': '8ffc1628f3mshd0a8f6f03ee3569p1947f0jsnff22a0e7b3a4',
    'x-rapidapi-host': 'pizza-and-desserts.p.rapidapi.com'
  }
};

const getData = async () => {
  try {
	  const response = await fetch(url, options);
	  const result = await response.text();
	  console.log(result);
  } 
  catch (error) {
  	console.error(error);
  }
}