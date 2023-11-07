let inputNumbers = "1 -3 5 7 9 -1";
const array = inputNumbers.split(" ");

function findMin(someArray) {
    let minValue = Infinity;
    for (let i = 0; i < someArray.length; i++){
        if (+someArray[i] < +minValue) {
            minValue = someArray[i];
        }
    }

    return minValue;
}

function findMax(someArray) {
    let maxValue = -Infinity;
    for (let i = 0; i < someArray.length; i++){
        if (+someArray[i] > +maxValue) {
            maxValue = someArray[i];
        }
    }

    return maxValue;
}

minV = findMin(array);
maxV = findMax(array);

console.log(`${minV} ${maxV}`);