const inputNumber = 10;
let answer = 0;

if (inputNumber > 0){
    for (let i = 1; i < inputNumber; i++){
        if ((i % 3 === 0) || (i % 5 === 0)){
            answer += i;
        }
    }
}

console.log(answer);