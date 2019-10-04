
// find the shortest word

const danishWords = ['bil', 'plante', 'kaffe', 'bog', 'ø', 'planetarium'];
const shortest = danishWords.reduce ((shortestWord, currentWord) => { 
    if (currentWord.length < shortestWord.length){
        return currentWord;
    }
    else{
        return shortestWord;
    }
});
console.log(shortest); // return ø

