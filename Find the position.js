/*
When provided with a letter, return its position in the alphabet.

Input :: "a"

Ouput :: "Position of alphabet: 1"


*/
function position(letter){
    //Write your own Code!
    let arrLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    for (let i = 0; i < arrLetters.length; i++) {
        if(arrLetters[i].toUpperCase() === letter.toUpperCase()){
            return `Position of alphabet:${i+1}`;
        } 
    }
    }
    console.log(position("z"));