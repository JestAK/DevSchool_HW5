class Vector {

    constructor(array){
        this.array = array;
    }

    add(otherVector){
        let tempArray = [];
        if(this.array.length === otherVector.array.length){
            for (let index in this.array){
                tempArray.push(this.array[index]+otherVector.array[index]);
            }

            return new Vector(tempArray);
        } else {
            throw new Error('Error');
        }

    }

    subtract(otherVector){
        let tempArray = [];
        if(this.array.length === otherVector.array.length){
            for (let index in this.array){
                tempArray.push(this.array[index]-otherVector.array[index]);
            }

            return new Vector(tempArray);
        } else {
            throw new Error('Error');
        }

    }

    dot(otherVector){
        let tempValuable = 0
        if(this.array.length === otherVector.array.length){
            for (let index in this.array){
                tempValuable += this.array[index] * otherVector.array[index];
            }

            return tempValuable;
        } else {
            throw new Error('Error');
        }

    }

    norm(){
        let tempValuable = 0
        for (let index in this.array){
            tempValuable += this.array[index] ** 2;
        }
        return Math.sqrt(tempValuable);
    }

    toString(){
        return `(${this.array.join(",")})`
    }

    equals(otherVector){
        return this.array.toString() === otherVector.array.toString();
    }
}