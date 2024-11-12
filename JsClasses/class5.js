/* 
    Nullish Coalescing Operator (??) -- This provides a convenient way to handle default values. 
        Default/fallback values can be used when a value is null or undefined, but NOT for other values like 0, false, "".
*/

const prompt = require('prompt-sync')();
// This is used to make use of propmts on the terminal.

const defaultValue = "Unknown Input";
let age;
const userInput = null ?? defaultValue;
const userAge = age ?? "Unknown Age"; 
console.log("This is your input", userInput, "and", userAge);

// let user = prompt("Who are you?");
// console.log("I am ", user);


// Using Loops In Javascript
/*
    -- We often need to repeat some actions/Executions. Loops are used to repeat the same code multiple times.

    The "While loop": Is used when we do not know the number of iterations beforehand.
    SYNTAX: 
        while(condition) {
            // do some code
            // Iteration (Increment or decrement)
        }
*/

let a = 10;
while(a) {
    console.log(`Student Number ${a}`);
    a--;
};

let count = 0;
while(count <= 100){
    console.log(count);
    count +=5;
};

// The "for loop": Is used when we know the number of iterations
/*
    SYNTAX: 
        for(initialization; condition; iteration) {
            // Code to be Executed
        }
*/

for(let i = 0; i < 20; i++) {
    console.log(`Fruit Number ${i}`);
};

for(let i = 10; i >= 0; i--){
    console.log(`Car Number ${i}`);
};

/*
    The "do-while loop": This is very similar to the while loop, except that it executes the block of code at least once.
    SYNTAX: 
        do {
            // Code to be executed
            // Iteration
        } while(condition);
*/

// The random method() in the Math Object is used to get a random number from 0-1 
for(let i = 10; i >= 0; i--){
    console.log(Math.random() * 10);
};


/*
    CLASS EXERCISE
        Create a JS program (guessing game) that prompts the user to enter a number.
        If the number is greater than the answer, output "Sorry, the number is too big" and vice versa.
        The user should have just 3 guesses.
*/

// SOLUTION
    let userName = prompt("Enter your name: ");
    alert(`${userName}, welcome to my guessing game!`);
    let game = confirm("If you want to continue click 'OK'. If not, click 'Cancel'.");
    if (game) {
        let gameAnswer = Math.floor(Math.random() * 20) + 1;    // Generates game answer once

        for (let i = 0; i < 3; i++) {
            let response = parseInt(prompt("Enter a number from 1 to 20: "), 10);
            (response === gameAnswer) ? console.log(`Great job ${userName}! Your guess is correct!`) : 
            (response > gameAnswer) ? console.log(`Sorry ${userName}, ${response} is too big.`) : console.log(`Sorry ${userName}, ${response} is too small.`);

            if (i === 2) {
                console.log(`Game over, ${userName}! The correct answer was ${gameAnswer}.`);
            }    
        }
    } else {
        alert(`See you next time ${userName}`);
    }

    
/* 
    LINE 86 explanation;

        gameAnswer is outside the 'for loop' so that it is generated once, so the user guesses the same number each time.

        the + 1 is used to ensure that the random number generated is within the range of 1 to 20 (inclusive), rather than 0 to 19.

        Here’s how it works:

        Math.random() : generates a random decimal number between 0 (inclusive) and 1 (exclusive).
        Math.random() * 20 : scales this to a number between 0 and 20 (exclusive), meaning the maximum value is close to 19.9999.
        Math.floor() : rounds down to the nearest integer, giving a result between 0 and 19.
        Adding + 1 shifts this range from 0–19 to 1–20.
*/

/*
    LINE 89 explanation;
        the 10 is the radix (or base) for the parseInt function. By specifying 10, you are telling parseInt to interpret the input as a base-10 (decimal) number.

        Without specifying the radix, parseInt may interpret the input in different bases depending on the format of the input:
          --  If the input starts with 0, JavaScript may assume it's an octal (base-8) number.
          --  If the input starts with 0x, it may assume it's a hexadecimal (base-16) number.
        Using 10 as the radix ensures the input is always treated as a standard decimal number,

*/


// ANOTHER SOLUTION

/*
 Labels in loops in javascript.
    They are used when we want to affect an external loop in a program.
        Examples: outer, inner, etc.
*/

/*
    outer: do{
        let play = confirm("Do you want to play my wonderful game? (yes/no)")
        if(play) {
            let answer = Math.floor(Math.random() * 20);
            inner: for(let i = 3; i > 0; i--){
                let guess = prompt("Enter a number from 1-20");
                if (guess > answer) {
                    console.log("Sorry the the number is too big")
                } else if (guess < answer) {
                    console.log("Sorry the the number is too small")
                } else {
                    console.log("Congratulations!!! You guessed correctly.");
                    break inner;
                };
            }
            let playAgain = confirm("Do you want to play again? ");
            if (playAgain) {
                continue outer;
            } else {
                break outer;
            }
        } else {
            console.log("Maybe Next Time.");
        }
    } while(false); // This will only run once since `while(false)` stops the loop
*/