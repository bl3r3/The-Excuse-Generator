//Get container
let sentence = document.getElementById('sentence')

//Sentences
let who = ['The dog','My grandma','His turtle','My bird'];
let action = ['ate','peed','crushed','broke'];
let what = ['my homework', 'the keys', 'the car'];
let when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];


//FUNCTION GET SENTENCE

const getSentence = (arr) => {
    let result;
    let random = Math.floor(Math.random() * arr.length)
    // arr.forEach((sentence, i) => {
    //     if (i === random) {
    //         result = sentence
    //     }
    // })

    for (let i = 0; i < arr.length; i++){
        if (i === random) {
            result = arr[i];
        }
    }
    return result
}


//CREATE SENTENCE

const createSentence = (who, action, what, when) => {
    let result = `${who} ${action} ${what} ${when}`
    return sentence.innerHTML = `<h2>${result}</h2>`
}

createSentence(getSentence(who), getSentence(action), getSentence(what), getSentence(when))