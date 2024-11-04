// USING CONDITIONALS

/*
    SYNTAX ("if" statement):
        if(condition) {
            code block or execution
        };

    SYNTAX ("if else" statement to execute a code when the 'if' condition is true or false):
        if(condition) {
            code block or execution
        } else {
            code block or execution 
        };

    SYNTAX ("else if" statements to check for multiple conditions):
        if(condition) {
            code block or execution
        } else if(condition){
            code block or execution 
        } else {
            code block or execution 
        };

*/

/*
    CLASS EXERCISE 1
        Write a program that prompts the user for their name and age, 
        then console.log "Hi, (username) you are eligible to vote!", 
        if the user age is greater than or equal 18, and vice versa.

*/

// SOLUTION FOR EXERCISE 1
    let userName = prompt("Enter your username: ");
    let userAge = prompt("Enter your age: ");

    if(userAge >= 18){
        console.log(`Hi, ${userName} you are eligible to vote!`);
    } else {
        console.log(`Sorry, ${userName} you are not eligible to vote!`);
    };



/*
    CLASS EXERCISE 2
        Write a program that takes in the user surname, age, sex(m/f), and according to the users input,
        console.log if the user is a man, boy, girl or woman. 
        E.g; "Hi John you are 25years old and you're a man."

*/

let surname = prompt("Enter your surname: ");
let age = parseInt(prompt("Enter your age: "));
let gender = prompt("Enter your gender using 'M' as Male and 'F' as Female: ");

// if (age >= 25 && gender === 'M') {
//     console.log(`Hi, ${surname} you are ${age}years old and you're a man.`);
// } else if (age < 25 && gender === 'M') {
//     console.log(`Hi, ${surname} you are ${age}years old and you're a boy.`);
// } else if (age >= 25 && gender === 'F') {
//     console.log(`Hi, ${surname} you are ${age}years old and you're a woman.`);
// } else if (age < 25 && gender === 'F') {
//     console.log(`Hi, ${surname} you are ${age}years old and you're a girl.`);
// } else {
//     console.log(`Sorry, ${surname} your input is invalid.`);
// }


// USING TERNARY OPERATORS: 

/*
    SYNTAX:
        (Condition) ? code execution : code execution;
*/

// E.g 1; Using exercise 1

// SOLUTION FOR EXERCISE 1 using ternary operators
(userAge >= 18) ? console.log(`Hi, ${userName} you are eligible to vote!`) : console.log(`Sorry, ${userName} you are not eligible to vote!`);


// E.g 2; Using exercise 2

// SOLUTION FOR EXERCISE 2 using ternary operators
(age >= 25 && (gender === 'M' || gender === 'm')) ? console.log(`Hi, ${surname} you are ${age}years old and you're a man.`) :
(age < 25 && (gender === 'M' || gender === 'm')) ? console.log(`Hi, ${surname} you are ${age}years old and you're a boy.`) :
(age >= 25 && (gender === 'F' || gender === 'f')) ? console.log(`Hi, ${surname} you are ${age}years old and you're a woman.`) :
(age < 25 && (gender === 'F' || gender === 'f')) ? console.log(`Hi, ${surname} you are ${age}years old and you're a girl.`) :
console.log(`Sorry, ${surname} your input is invalid.`);

// console.error("This is an error");
// console.warn("This is a warning");
// console.clear();


/*
    CLASS EXERCISE 3
        Using ternary operators, prompt the user to enter his course of study,
        if the course is Science, output "Hi, you are studying a science course",
        else if it's an Art course, else output "You are studying some other course".
*/

let course = prompt("Enter your course of study (either Science or Art): ");

(course == "Science") ? console.log("Hi, you are studying a science course") : 
(course == "Art") ? console.log("You are studying some other course") :
console.error("Wrong input");