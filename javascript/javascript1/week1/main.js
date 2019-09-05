//Age-ify (A future age calculator)

const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
const result = "you will be" + " "+age + " " + "years old in"+" "+ yearFuture +".";
console.log(result);


//goodboy-oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
const dogYear = dogYearFuture - dogYearOfBirth ;
if (shouldShowResultInDogYears = 'true'){
     console.log("your dog will be "+ dogYear *7 +" dog years old in 2027" + ".")
}
else if (shouldShowResultInDogYears = 'false'){
    console.log("your dog will be "+ dogYear +" human years old in 2027" + ".")
}


 // Housey pricey (A house price estimator)
 
 const pvolumeInMeters = 8*10*10;
 let peterHousePrice = pvolumeInMeters*2.5*1000+100*300;
 console.log (peterHousePrice);

 if (peterHousePrice > 250000){
     console.log ("peter paying too much")
 }
 else{
     console.log ("peter paying fine")
 }
 

 // julia house 
 
const jvolumeInMeters = 5*11*8;
let juliaHousePrice = jvolumeInMeters*2.5*1000+70*300;
console.log(juliaHousePrice);

if (juliaHousePrice < 100000){
    console.log ("julia is paying too little")
}
else{
    console.log("julia is paying more")
}


// Ez Namey (startup name generator) optional
const firstWords = ["Awesome","Easy","Corporate","Baresso","Java","Hack","Joe","Nohan","Newbie","classy"];
const secondWords = ["frigg","Accenture","PWD","Novo","McKney","ehack","Novozyme","grow","Uni","Action"];
const randomNumber = Math.floor(Math.random() * 10 ) + 1;
let startupName = [firstWords[randomNumber] + secondWords[randomNumber]];

console.log (`The startup ${startupName} contains ${startupName.length} characters`)