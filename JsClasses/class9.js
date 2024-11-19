/*
    Problem Statement 1
        Using a while loop, create a program that prompts the user to enter the number of pizzas he/she wants to order(n).
        Then on the console, output "Pizza order n"
        e.g;
            If the user enter 5;
        output;
            Pizza order 1
            Pizza order 2
            Pizza order 3
            Pizza order 4
            Pizza order 5


    OPTIMIZED PRIMALTY TEST (OPT) :
        Integers larger than the square root do not need to be checked, whenever 'n = a*b' one of the two factors 'a' and 'b' is less than or equal to the square root of 'n'.

        Problem Statement 2
            Given a natural number 'n', determine if the number is prime or not.
            A Prime number is a natural number greater than 1 that is not a product of two smaller natural numbers.

            isPrime(5) = true (1*5 or 5*1) 
            isPrime(4) = false (1*4 or 2*2 or 4*1) 

*/

// Solution 1

let userOrder = Number(prompt("Enter the number of pizza(s) you want:"));
let i = 1;

while (i <= userOrder) {
    console.log(`Pizza Order ${i}`);

    i++;
}
           

// Solution 2

function isPrime(n){
    // if (n < 2) return false; 
    // OR
    if (n < 2) {
        return false;
    };

    for(let i = 2; i <= n; i++) {
        if (n % i == 0) {
            return false; // return statements terminates a function Any code written after it won't execute, that's why there's no 'else statement'.
            // We are returning 'false' because if a number(i) divides n perfectly, it is not prime, because there's no remainder. 
            // For instance; 12 % 2 == 0, 12 % 4 == 0, BUT  5 % 2 == 1, 5 % 3 == 1, therefore 5 is a prime, but 12 isn't.
        };
    };
    return true;
}

let prime = Number(prompt("Enter the number to be checked: "));
console.log(isPrime(prime));


//  Another solution for question 2
let optimizedIsPrime = function (n){
    if (n < 2) return false; 

    for(let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i == 0) {
            return false;
        };
    };
    return true;
}
console.log(optimizedIsPrime(prime));



// Answer to a different question...
function falseReturner (num) {
    if (num < 1) {
        return false;
    }
}


/*
    FUNCTION EXPRESSION:
        This is another way to define a function, here we use a variable and store the returned value in that variable.
*/

let sub = function (a, b) {
    return a - b;
};

console.log(sub(10.9, 5));


/* 
    ARROW FUNCTIONS:
        This function was introduced in the ES6 version of javascript, it is used to shorten the code.
        Here the function keyword is not used but an arrow symbol is used instead.
*/
let multiply = (x, y) => x * y;

const printNumbers = (n) => {
    for(let i = 1; i <= n; i++){
        console.log(`Phone number ${i}`);
    }
}