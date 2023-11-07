function unpackSausages(arr){
    let outputArray = [];

    for (let i = 0; i < arr.length; i++){
        for (let k = 0; k < arr[i].length; k++){

            //If it does starts with "[" and ends with "]" then box is broken
            if ((arr[i][k].startsWith("[") && arr[i][k].endsWith("]")) && arr[i][k].length === 6){

                //Convert string to array
                let tempArray = [];
                tempArray = Array.from(arr[i][k].slice(1, (arr[i][k].length) - 1));

                //Check if there is not the same sausages
                let is_notSame = tempArray.some((el) => el !== tempArray[0]);

                //If it's the same then push to output array
                if (!is_notSame){
                    outputArray.push(tempArray);
                }
            }
        }
    }

    let outputArray2 = [];

    for (let index in outputArray){
        if ((+index + 1) % 5 !== 0){
            outputArray2.push(outputArray[index]);
        }
    }

    return outputArray2.flat(Infinity).join(" ");
}