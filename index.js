// User input module
const readline = require("readline")

// Initialize readline module
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let randomNum = Math.round(Math.random() * 10)

// Process user input
function processInput(input) {
    if (input == "quit") {
        process.exit(0)
    }

    if (input < randomNum) {
        console.log("Too low!")
    }
    else if (input > randomNum) {
        console.log("Too high!")
    }
    else if (input == randomNum) {
        console.log("You won!")

        randomNum = Math.round(Math.random() * 10)
        console.log("Guess a number between 1 and 10: ")
    } else {
        console.log("Invalid input!")
    }
}

console.log("Guess a number between 1 and 10: ")

// Listen for user input
rl.on("line", processInput)