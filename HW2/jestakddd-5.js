//Check if an array has needed value
function findValue(array, neededValue){
    for (let value of array){
        if (value === neededValue){
            return true;
        }
    }
}

//Recursion function to find arrays inside nested objects
function findObj(object, neededValue){
    for (let key in object){

        //If it's an array then check if it has needed value, else it's object and we need go inside
        if (Array.isArray(object)){
            if (findValue(object, neededValue)){
                return true;
            }
        } else {
            if (findObj(object[key], neededValue)){
                return true;
            }
        }
    }
}


function getRootProperty(enterObj, neededValue){

    //Parse first level objects
    for (let key in enterObj){
        let parent = key;
        if (findObj(enterObj[parent], neededValue)){
            return parent;
        }
    }

    return null;
}