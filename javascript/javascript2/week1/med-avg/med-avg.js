// Difference between median and average
// Make a function that takes an array as parameter and returns avg.of the parameter
// Make a function that takes an array as parameter and returns median.of the parameter
// to calculate the median
// to find out the median of even no. find the average of two median numbber

// calculate the median
const housePrices = [3000000, 3500000, 1300000, 40000000, 100000000, 8000000, 2100000];
function median (array){
    const mid = (array.length / 2);
    if (array.length % 2){
        return array([mid]+array[mid-1])/2 // this is for even no.

    }else{
        return array[Math.floor(mid)]; // 

    }
}
    //console.log(housePrices);
    

    // average
function average(array){
    let sum = 0;
    for (let i=0; i<array.length; i++){
        sum += array[i];
}
    
return sum/array.length;

}
console.log(median(housePrices));
console.log(average(housePrices));

// Now render the prices  average and median in web
const ul = document.createElement('ul');
housePrices.forEach((price)=>{
    const li = document.createElement('li');
    li.textContent = price;
    ul.appendChild(li);
});

const averageprice = document.getElementById("avgvalue");
 averageprice.textContent = average(housePrices);

 const medianPrice = document.getElementById("medianvalue");
 medianPrice.textContent = median(housePrices);

