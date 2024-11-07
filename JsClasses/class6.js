// The Break Statement is used to break out of a loop within a loop
console.log("Effect of Break Statement");

/*
    Class Exercise 1
        Create a for loop that prints numbers 1 to 5
*/

/*
    SOLUTION
        for(let i = 5; i >= 1; i--) {
            console.log(i);
        };

    ANOTHER SOLUTION
        for(let i = 1; i <= 5; i++) {
            console.log(i);
        };
*/

// ANOTHER SOLUTION
    for(let i = 1; i <= 5; i++) {
        console.log(i);
        if(i == 3) {
            break;
        };
    };

// The Continue Statement is used to break/skip one statement/code execution and iterate over to the next statement.
/*
    Class Exercise 2
         My wonderful students kindly create a loop that prints out numbers from 50 down to 40.
*/

console.log("Effect of Continue Statement");

/*
    for(a = 50; a >= 40; a--) {
        console.log(a);
    }
*/

for(a = 50; a >= 40; a--) {
    if (a == 44 || a == 41) {
        continue;
    };
    console.log(a);
}

/*
    THIS WORKS BUT IT IS NOT THE SOLUTION
        do{
            console.log(a);
            a--;
        } while(a >= 40);
*/

/*
    CLASS EXERCISE FROM CLASS 5
        Create a JS program (guessing game) that prompts the user to enter a number.
        If the number is greater than the answer, output "Sorry, the number is too big" and vice versa.
        The user should have just 3 guesses.
*/

// SOLUTION
    
/*
 Labels in loops in javascript.
    A label is an indentifier with colon before a loop. 
    They are used when we want to affect an external loop in a program.
        Examples: outer, inner, etc.

    SYNTAX:
        labelName: for(...) {
            code execution
        }
*/

/*
    EXAMPLE:
        outer: for(let i = 0; i < 5; i++) {
            for(let j = 0; j < 5; j++) {
                if (i === 2 && j === 2) {
                    continue outer;
                } else {
                    console.log(i, j);
                }
            }
        }
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

/*
    Class Exercise 3
        Create a JS program that prints out numbers 1 - 50, 
        if a number is divisible by 3, print "Fizz" and 
        if a number is divisible by 5, print "Buzz".
*/

/*
    SOLUTION
        for(x = 1; x <= 50; x++) {
            if (x % 3 == 0) {
                console.log(x, "is Fizz");
            } else if (x % 5 == 0){
                console.log(x, "is Buzz");
            } else {
                continue;
            }
        }
        console.log(x);
*/

// CORRECT SOLUTION

let result = "";
for (let c = 1; c <= 50; c++) {
    if(c % 3 == 0) {
        result += "Fizz, ";
    } else if (c % 5 == 0) {
        result += "Buzz, ";
    } else {
        result += c + ", ";
    }
}
console.log(result);


// A SELF PRACTICE
// do{
//     let fizz = confirm("Do you want to divide by 3? \n If yes click 'OK', if not click 'Cancel'");
//     let buzz = confirm("Do you want to divide by 5? \n If yes click 'OK', if not click 'Cancel'");
//     if(fizz) {
//         let userInput = parseInt(prompt("Enter a number you want to be divided: "));
//         let fizzAnswer = userInput/3;
//         console.log(parseInt(fizzAnswer));
//     } else if (buzz) {
//         let buzzUserInput = parseInt(prompt("Enter a number you want to be divided: "));
//         let buzzAnswer = buzzUserInput/5;
//         console.log(parseInt(buzzAnswer));
//     } else {
//         console.log("See you next time");
//     }
// } while(false);