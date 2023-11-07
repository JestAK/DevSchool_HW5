function arraySum(array){
    let sum = 0;

    for (let el of array){
        sum += el;
    }
    return sum;
}

function findEvenIndex(arr){
    for (let index in arr){

        //Find sum of sliced arrays
        let leftArr =  arraySum(arr.slice(0, +index));
        let rightArr = arraySum(arr.slice(+index+1));

        if (leftArr === rightArr) {
            return +index;
        } else if (+index === arr.length - 1){
            return -1;
        }
    }
}