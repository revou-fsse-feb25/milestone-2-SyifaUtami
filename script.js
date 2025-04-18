let randomNumber = Math.floor(Math.random() *100 + 1) //plus one bc it's start w/ zero
let guessSubmit = 5
let attempts= 1
const numDiffer = abs(guessSubmit - randomNumber)
        
document.getElementById("submitGuess").onclick = function() {
    if (randomNumber == guessSubmit) {
        console.log("yes")
    }
    else if (randomNumber > guessSubmit) {
        console.log("too high")
    }
    else if (randomNumber < guessSubmit) {
        console.log("too low")

    }
}
guessSubmit()