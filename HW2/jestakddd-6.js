function landPerimeter(inputArray){
    let perimeter = 0;

    for (let i = 0; i < inputArray.length; i++){
        for (let j = 0; j < inputArray[i].length; j++){
            if (inputArray[i][j] === "X"){
                perimeter += 4;

                if (j+1 < inputArray[i].length){
                    if (inputArray[i][j+1] === "X"){
                        perimeter -= 1;
                    }
                }
                if (i+1 < inputArray.length){
                    if (inputArray[i+1][j] === "X"){
                        perimeter -= 1;
                    }
                }
                if (j-1 >= 0){
                    if (inputArray[i][j-1] === "X"){
                        perimeter -= 1;
                    }
                }
                if (i-1 >= 0){
                    if (inputArray[i-1][j] === "X"){
                        perimeter -= 1;
                    }
                }
            }
        }
    }

    return `Total land perimeter: ${perimeter}`;
}