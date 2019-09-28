
//Character frequencies (class work)

const array = [];
function seperate(word) {
    arrayOfWord = word.split('');
    arrayOfWord = arrayOfWord.sort()
    word = arrayOfWord.join('');
    let added = false;
    for (let i = 0; i < word.length; i++) {
        added = false;
        for (j = 0; j < array.length; j++) {
            if (array[j].character === word[i]) {
                array[j].count += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            array.push({ 'character': word[i], 'count': 1 });
            added = true;
        }
    }
    return array;
}
console.log(seperate('happy'));