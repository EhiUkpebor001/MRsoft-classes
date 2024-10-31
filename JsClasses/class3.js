
// The prompt method returns a string by default.
// The 'typeof()' function, is used to show us the type of data type we have inside the function



// let num1 = prompt("Enter your first number: ");
// let num2 = prompt("Enter your second number: ");

// console.log(typeof(num1));              
// console.log(num1 + num2); // This will output the two numbers together as a string, instead of adding the numbers and producing the sum. This is because, by default, 'Prompt' displays its inputs as strings.

// console.log(parseInt(num1) + parseInt(num2)); // This will provide the sum of the inputted numbers, because we converted the input data type from string to integer using the 'parseInt()' function.



/* 
    parseFloat() function; is used when the required input is to be in decimal.
                If parseInt() function is used for an input that is a decimal, the output will be summed up into a whole number. 
                (i.e instead of an output of 6.8, it will become 6)
*/

/* 
    TYPE CONVERSIONS
        1) Implicit type conversion: 
            Example is below. In that example, it shows us that strings overshadows integer. (i.e if we have a string and a number together, the output will be in a string format.)
*/

let num = 10;
let str = '5';
console.log(num + str);
// console.log(num + Number(str)); 

//      2) Explicit type conversion: The example is that on line 11, where we converted a data type into another data type.
let newNum = Number(str);       
console.log(num + newNum);
// The Number() function, does the same thing parseInt() and parseFloat() does. Meaning that it converts some data types to a Number. Data Types like; boolean, etc.
console.log(Number(true));


let dec = 30.567;
let decInt = parseInt(dec);
let dec2 = '20.345';
let decFloat = parseFloat(dec2);

/*
    console.log() - This is a function that provides output of our code in real-time. It can take more than one argument.  
        SYNTAX:
            console.log(arg1, arg2, arg3, ...);
*/

console.log(dec, decInt, dec2, decFloat);


/*
    BASIC OPERATIONS IN JAVASCRIPT
        1) Arithmetic Operations
*/
let sum = 8 + 5;        
let mul = 2 * 2;        
let minus = 5 - 2;        
let div = 10 / 2;        
let rem = 10 % 3;       // Modulus (mod - %) -- Remainder of division

console.log(sum, mul, minus, div, rem);

// 2) Assignment Operator (=)
let score = 100;
let color = "green";
let malaria = 5;

// 3) Increment / Decrement Operators (--, ++)

score++ ;       // This means; score = score + 1; OR score += 1;
malaria-- ;     // This means; malaria = malaria - 1; OR malaria -= 1;

console.log(score);
console.log(malaria);

score += 50;        // This is to increase score by 50
console.log(score);

score /= 10;        // This is to divide the value of score by 10
console.log(score);

malaria *= 2;       // This is to multiply the value of malaria by 2
console.log(malaria);

malaria -= 3;       // This is to subtract the value of malaria by 3
console.log(malaria);

// --------------------------------------------------------------------------------------
// In the context of LOOPS the below formats means a different answer.
++score ;       // This produces the same answer as ' score++ '
--malaria ;     // This produces the same answer as ' malaria-- '

console.log(score);
console.log(malaria);

// -------------------------------------------------------------------------------------


/*
    4) Comparison Operators
        i) Equality (== or ===) i.e. loosely equal to, and strictly equal to respectively.
*/

let a = 5, b = '5';
console.log(a == b);   // Ans: true     // This one checks for only if the values are the same, and ignores if the data types are different
console.log(a === b);  // Ans: false     // This one checks for if the values and the data types are the same.


/*
      ii) Inequality (!= or !==) i.e. not equal to, and not strictly equal to respectively.
                        This outputs 'FALSE' if the answer is correctly true
                        This outputs 'TRUE' if the answer is correctly false
*/
            
console.log(a != b);   // Ans: false     // This one checks for only if the values are the same, and ignores if the data types are the different. And outputs 'FALSE' 
console.log(a !== b);  // Ans: true     // This one checks for if the values and the data types are the different. And outputs 'TRUE'


//      iii) Relational Operators (>, <, >=, <=)

let gt = 10 > 5,
    lt = 10 < 5,
    gtoe = 10 >= 5,
    ltoe = 10 <= 6;

console.log(gt, lt, gtoe, ltoe);


/*
     iv) Logical Operators: Logical operators are used on 'true or false' expressions. There are three major logical operators;
                    - AND (&&)
                    - OR (||)
                    - NOT (!).
*/

let m = true,
    n = false;

console.log(m && n);
console.log(m || n);
console.log(!m);
