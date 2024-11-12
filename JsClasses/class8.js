/*
    FUNCTIONS IN JAVASCRIPT
        A function is a set of statement that takes input, does some specific computation and produce an output.

        SYNTAX:
            function functionName(parameter1, parameter2, ...) {
                function body || code
                return;
                // Any code written after the return statement wouldn't be executed
            };

        1) When Javascript reaches a return statement the function will stop executing and return a value.
        2) Parameters are placeholders, for values to be passed into a function when the function is called.
        3) Arguments are the values that are to be passed into a function when the function is called.

        WHY DO WE USE FUNCTIONS?
            -- With functions, you can reuse code and also write code that can be used many times.
            -- Also, you can use the same code with different arguments, to produce different results.

*/

//  FUNCTION DECLARATION
function addNumbers(num1, num2, num3) {
    return num1 + num2 + num3;
};

//  CALLING / INVOKING A FUNCTION using the arguments
console.log(addNumbers(3, 4, 5));
console.log(addNumbers(30, 45, 59));
console.log(addNumbers(23, 40, 15));
console.log("\n");


/*
    CLASS EXERCISE 1
        Create functions that multiplies, subtracts and divides two numbers
*/    

// MULTIPLY - SOLUTION 1
function multiply(number1, number2) {
    return number1 * number2;
};

console.log(multiply(2, 5));
console.log(multiply(2, 8));
console.log(multiply(2, 40));
console.log("\n");

// MULTIPLY - SOLUTION 2
function mult(number1, number2) {
    console.log(number1 * number2);
};

mult(12, 5);
mult(20, 8);
mult(4, 40);
console.log("\n");

// SUBTRACTS
function sub(number1, number2) {
    return number1 - number2;
};

console.log(sub(20, 5));
console.log(sub(32, 8));
console.log(sub(82, 40));
console.log("\n");

// DIVISION
function divide(num1, num2) {
    console.log(num1 / num2);
};

divide(80, 5);
divide(24, 8);
divide(200, 40);
console.log("\n");


/*
    CLASS EXERCISE 2
        Create a function that prints "How are you?" 10 times and it shouldn't take in any argument or parameter.
*/   


//  SOLUTION 1
function tenHw() {
    for(let i = 0; i < 10; i++) {
        console.log("How are you?", i);
    };

    console.log("\n");
};

tenHw();


// SOLUTION 2
function printTenHw() {
    let i = 1;
    while(i <= 10) {
        console.log("How are you?", i);
        i++
    };
    console.log("\n");
};

printTenHw();


/*
    CLASS EXERCISE 3
        Create a function that checks for even numbers, when given an upper limit.
        It should return the number of even numbers present in the range.
        i.e CheckEven(10) ; Output -- There are 6 even numbers in 10.
*/  


// SOLUTION 1
function checkEvenNumber() {
    let upperLim = parseInt(prompt("Enter the upper limit: "));
    let evenNum = 0;
    for(let i = 0; i <= upperLim; i++) {
        if(i % 2 == 0){
            evenNum++;
        }else {
            continue;
        };
    };
    console.log(`There are ${evenNum} even numbers in ${upperLim}!`);
    console.log("\n");
};

checkEvenNumber();

// SOLUTION 2
function checkEven(upperLimit) {
    let even = 0;
    numbers: for(let i = 0; i <= upperLimit; i++) {
        if(i % 2 == 0){
            even++;
        }else {
            continue numbers;
        };
    };
    console.log(`There are ${even} even numbers in ${upperLimit}!`);
};

checkEven(20);
checkEven(10);
checkEven(100);