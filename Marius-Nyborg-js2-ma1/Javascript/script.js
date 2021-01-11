

const url = 'https://t9jt3myad3.execute-api.eu-west-2.amazonaws.com/api/products';

const resultsContainer = document.querySelector(".results");

let results = [];

async function getAPI(){

    const response = await fetch(url);

    const results = await response.json();

    const products = results.data;
    
    resultsContainer.innerHTML = "";

    getAPI(results);   
 
    for (let i = 0; i < products.length; i++){
   

    resultsContainer.innerHTML += `<div class="result"><p>${products[i].name}</p> price = ${products[i].price} </div>`;
    } 
}                               

getAPI();



const search = document.querySelector(".search");


search.addEventListener('keyup', (addValue) =>{
    const searchString = addValue.target.value;
    const filteredCharacters = results.filter((character) =>{
      return(
          character.name.includes(searchString) ||
          character.price.includes(searchString)
      );
    }); 
    getAPI(filteredCharacters);

    
});

