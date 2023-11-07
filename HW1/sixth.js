const inputNumber = 2474704649;
const array = inputNumber.toString().split("");
let resultArray = [];
let tempMax;
let realMax;
let result = 0;

//Finds max value, but lower than max value before
function findMax(someArray) {
    let maxValue = -Infinity;
    for (let i = 0; i < someArray.length; i++){

        //Check if tempMax is empty
        if (tempMax != undefined){
            if ((someArray[i] > maxValue) && (someArray[i] < tempMax)) {
                maxValue = someArray[i];
            }
        }
        else{
            if (someArray[i] > maxValue) {
                maxValue = someArray[i];
            }
        }

    }

    return maxValue;
}

if (inputNumber > 0) {
    realMax = tempMax = findMax(array);

    while (resultArray.length !== array.length){
        for (let i = 0; i < array.length; i++){
            if (array[i] === tempMax){
                resultArray.push(tempMax);
            }
        }
        tempMax = findMax(array);
    }
}

//Convert array to number
for (let i = 0; i < resultArray.length; i++){
    result += resultArray[i] * 10**(resultArray.length - i - 1);
}

console.log(result);