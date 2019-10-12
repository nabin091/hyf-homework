console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('section.products ul');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        const shipsToHTML = product.shipsTo.reduce((acc, country) => `<li>${acc}</li><li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}

renderProducts(products);

// Searching for products 

const searchInput = document.querySelector ('.search input');
//addEventListner for searching
searchInput.addEventListener ('keyup, SearchByName');

function searchByName (){
const filterProduct = products.filter (product => product.name.includes.toLowerCase ().trim() (select .value));
  if(!filterProduct){
    renderProducts(products);

  }
  const productMatch = products.filter(product => product.name.toLowerCase().includes(filterProduct));
  renderProducts(productMatch);
}

/* create and append button
// create a button  add to cart
const btn = document.createElement ('button');
btn.innerHTML = ' add to cart';
li. appendChild (btn);

//showing products that ships to country - optional
const productShiptToCountry = document.querySelector ('.country select')
// add event listner for selecting a country
//productShiptToCountry.addEventListener ('change', searchByCountryName);

*/