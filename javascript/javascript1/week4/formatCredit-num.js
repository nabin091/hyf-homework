function formatCreditNumber(input) {
    if (typeof input === "number") {

        const string = input.toString();
        //console.log(string);
        const inputArray = string.split("");
        // console.log(inputArray);
        inputArray.splice(4, 0, " ");
        inputArray.splice(9, 0, " ");
        return inputArray.join("");

    }
    return false;
}

const formattedCreditCardObject = formatCreditNumber(123456789);
console.log(formattedCreditCardObject);
