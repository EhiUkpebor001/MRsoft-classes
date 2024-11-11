/*
    SWITCH STATEMENTS in Javascript

        Javascript switch statements provides a way to execute different blocks of code, based on different conditions.
        It is an alternative to using multiple else...if, else if statements, when there are multiple conditions to check for.

        SYNTAX:
            switch(expression) {
                case value1:
                  // code;
                    break;
                case value2:
                  // code;
                    break;
                case value3:
                  // code;
                    break; 
                ...
                default:  
                    // default code;     
            }

            -- expression is the value to be compared,
            -- case value1, value2, value3 represents the possible values of the expression,
            -- break statement terminates the switch statement. (without it the execution would continue into the next case),
            -- default specifies the code to run if none of the cases were met. (This is optional).


    'npm i prompt-sync' to install the prompt sync package that enables us to use the prompt function on the terminal.
*/
let day = prompt("Enter your birth-day (i.e monday):");
let birthdayMessage = "";
switch(day.toLocaleLowerCase()) {
    case "monday":
        birthdayMessage = "Hi there, you were born on a Monday";
        break;
    case "tuesday":
        birthdayMessage = "Hi there, you were born on a Tuesday";
        break;
    case "wednesday":
        birthdayMessage = "Hi there, you were born on a Wednesday";
        break;
    case "thursday":
        birthdayMessage = "Hi there, you were born on a Thursday";
        break;
    case "friday":
        birthdayMessage = "Hi there, you were born on a Friday";
        break; 
    default:
        birthdayMessage = "Hi there, you weren't born on a working day";   
};
console.log(birthdayMessage);


/*
    CLASS EXERCISE
        Using a switch statement, create a grading program, i.e 
        If the users score is >=90, output "You got an A",
        If the users score is >=80 and <90, output "You got a B",
        If the users score is >=70 and <80, output "You got a C",
        default output is "You didn't pass",
*/

let welcomeMessage = alert("Welcome to my grading program");
let userName = prompt("Enter your name: ");
let score = prompt(`${userName}, enter your score: `);
let scoreMessage = "";

switch (true) {
    case (score >= 90):
        scoreMessage = "You got an A";
        break;
    case (score >= 80 && score < 90):
        scoreMessage = "You got a B";
        break;
    case (score >= 70 && score < 80):
        scoreMessage = "You got a C";
        break;
    default:
        scoreMessage = "You didn't pass";
}
console.log(scoreMessage);