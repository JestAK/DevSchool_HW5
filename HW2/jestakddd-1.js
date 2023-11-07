function largestRadialSum(arr, d) {

    let maxHonor = -Infinity;
    let tempSumHonor = 0;
    let step = (arr.length - d) / d;


    //Move array items to the right
    for (let k = 0; k <= step; k++){

        //Take honor sum of hypothetical leaders on current array position
        for (let i = 0; i < arr.length;){
            tempSumHonor += arr[i];
            i += step + 1;
        }

        if (tempSumHonor > maxHonor){
            maxHonor = tempSumHonor;
        }

        tempSumHonor = 0;

        arr.unshift(arr.pop());
    }

    return maxHonor;
}