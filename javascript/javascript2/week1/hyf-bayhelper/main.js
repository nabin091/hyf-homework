// main js

console.log('Script loaded');

const products = getAvailableProducts();
/*
[{
    id: 23771823,
    name: 'Flat screen',
    price: 4000,
    rating: 4.2,
    shipsTo: [ 'denmark', 'germany'],
},
...]
*/
console.log(getAvailableProducts());

function renderProducts(products){
    const ul = document.querySelector('selection.product>ul');
    const ul = document.createElement('li');
    ul.appendChild(li);

// creating list inside ul

    ul.appendChild(document.createElement('li','name',product.name));
    ul.appendChild(document.createElement('li','price',product.price));
    ul.appendChild(document.createElement('li','rating',product.rating));
// create ul for shiping and list to ships

}

