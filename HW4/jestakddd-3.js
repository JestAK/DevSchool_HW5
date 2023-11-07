class Warrior{

    static allRanks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
    constructor() {
        this.levelVal = 1;
        this.experienceVal = 100;
        this.rankVal = Warrior.allRanks[0];
        this.achievementsVal = [];
    }

    level(){
        return this.levelVal;
    }

    experience(){
        return this.experienceVal;
    }

    rank(){
        return this.rankVal;
    }

    achievements(){
        return this.achievementsVal;
    }

    training(parametersArray){
        let description = parametersArray[0];
        let earnXP = parametersArray[1];
        let minLevel = parametersArray[2];

        if (this.levelVal >= minLevel){
            this.experienceVal += earnXP;
            if (this.experienceVal > 10000){
                this.experienceVal = 10000;
            }
            this.levelVal = (this.experienceVal - (this.experienceVal % 100)) / 100;
            this.rankVal = Warrior.allRanks[(this.levelVal - (this.levelVal % 10)) / 10];
            this.achievementsVal.push(description);

            return description;
        } else {
            return "Not strong enough";
        }
    }

    battle(enemyLevel){
        let message = '';

        if (enemyLevel < 1 || enemyLevel > 100){
            return "Invalid level";
        }

        if (enemyLevel <= this.levelVal){
            if (enemyLevel === this.levelVal){
                this.experienceVal += 10;
            }
            else if (enemyLevel + 1 === this.levelVal) {
                this.experienceVal += 5;
            }

            if (enemyLevel <= this.levelVal - 2){
                message = "Easy fight";
            }
            else if(enemyLevel === this.levelVal - 1 || enemyLevel === this.levelVal){
                message =  "A good fight";
            }
        }
        else {
            if ((enemyLevel - (enemyLevel % 10)) / 10 > (this.levelVal - (this.levelVal % 10)) / 10 && enemyLevel >= this.levelVal + 5){
                return "You've been defeated";
            }
            else {
                this.experienceVal += 20 * (enemyLevel - this.levelVal) ** 2;
                message = "An intense fight";
            }
        }

        this.levelVal = (this.experienceVal - (this.experienceVal % 100)) / 100;
        this.rankVal = Warrior.allRanks[(this.levelVal - (this.levelVal % 10)) / 10];

        return message;
    }
}