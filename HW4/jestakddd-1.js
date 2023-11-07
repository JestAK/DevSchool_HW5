class VigenèreCipher{

    constructor(key, abc) {
        this.key = key;
        this.alphabet = abc;
    }

    encode(msg){
        let encodedMsg = [];

        for (let i = 0; i < msg.length; i++){
            let characterIndex = this.alphabet.indexOf(msg[i]);
            let shift = this.alphabet.indexOf(this.key[i%this.key.length]);

            if (!this.alphabet.includes(msg[i])){
                encodedMsg.push(msg[i]);
                continue;
            } else {
                encodedMsg.push(this.alphabet[(characterIndex + shift)%this.alphabet.length]);
            }
        }

        return encodedMsg.join("");
    }

    decode(msg){
        let decodedMsg = [];

        for (let i = 0; i < msg.length; i++){
            let characterIndex = this.alphabet.indexOf(msg[i]);
            let shift = this.alphabet.indexOf(this.key[i%this.key.length]);

            if (!this.alphabet.includes(msg[i])){
                decodedMsg.push(msg[i]);
                continue;
            } else {
                if (shift > characterIndex){
                    decodedMsg.push(this.alphabet[this.alphabet.length + ((characterIndex - shift)%this.alphabet.length)]);
                } else {
                    decodedMsg.push(this.alphabet[(characterIndex - shift)%this.alphabet.length]);
                }
            }
        }

        return decodedMsg.join("");
    }
}