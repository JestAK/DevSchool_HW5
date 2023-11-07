function groupAnagrams(array){
    let outputArray =  [];

    //Compare every element with each other
    for (let k = 0; k < array.length; k++){
        let subArray = [];

        for (let i = 0; i < array.length; i++){
            if (array[k].length === array[i].length){
                if ((Array.from(array[k]).sort()).join("") === (Array.from(array[i]).sort()).join("")){
                    subArray.push(array[i]);

                    //Delete if an element is anagram of another word to avoid duplications
                    if (!(array[k] === array[i])){
                        array.splice(i, 1);
                        i--;
                    }
                }
            }
        }

        //Push sub-Array from iteration into the main Array
        outputArray.push(subArray);
    }

    return outputArray;
}