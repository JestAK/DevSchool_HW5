const totalVolume = 1071225;

function findNB(m){
    let i = -1;
    for (i = 1; m > 0; i++){
        m -= i**3;
    }
    if (m != 0){
        i = -1;
        return i
    }
    else {
        return i - 1;
    }
}

console.log(findNB(totalVolume));