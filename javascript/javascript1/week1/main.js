// ex 1 //Age-ify (A future age calculator)


const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
const result = "you will be" + " "+age + " " + "years old in"+" "+ yearFuture +".";
console.log(result);

// ex2 //goodboy-oldboy (A dog age calculator)


const dogYearOfBirth = 2017;
const dogYearOfFuture = 2027;
const dogYear = dogYearOfFuture - dogYearOfBirth

const shouldshowResultInDogYears = true;

if (shouldshowResultInDogYears) { console.log 

("your dog will be"+" " + dogYear*7 +" " + "dog years old in" + dogYearOfFuture );}
else if
(shouldshowResultInDogYears) { console.log 
    ("your dog will be" + dogYear + "human years old in" + dogYearOfFuture );}  

    //  peter house ex3 // Housey pricey (A house price estimator)

    
    const peterHouseVolumeInMeter = 8*10*10;
    const peterGardenSizeM2 = 100;
    peterHousePrice = peterHouseVolumeInMeter * 2.5 * 1000 + peterGardenSizeM2 * 300
    console.log(peterHousePrice);
    if (peterHousePrice>2500000 ) {           // > greater sign
        console.log ("peter paying ok")
    }
    else
    console.log("peter paying too much")
    // julia house
    
    const juliaHouseVolumeInMeter = 5*11*8;
    const juliaGardenSizeM2 = 70;
    juliaHousePrice = juliaHouseVolumeInMeter * 2.5 * 1000 + juliaGardenSizeM2 * 300
    console.log(juliaHousePrice);
    if (juliaHousePrice<1000000 ) {
        console.log("julia paying too much")
    }
    else 
    console.log("julia paying too little")

     // Ez Namey (startup name generator) optional


    let firstWords = ["Awesome","Easy","Corporate","Baresso","Java","Hack","Joe","Nohan","Newbie","classy"];
    let  secondWords = ["Awesome","Easy","Corporate","Baresso","Java","Hack","Joe","Nohan","Newbie","classy"];
    let randomNumber1 = Math.floor(Math.random() * 10 ) + 0;
    let randomNumber2 = Math.floor(Math.random() * 10 ) + 0;
    let startUpName = firstWords[randomNumber1] + " " + secondWords[randomNumber2];
    const resultStartUp = "the start up"+" "+ startUpName + " " + "contains" + " " + startUpName.length + " characteers";
    console.log(resultStartUp);
    



