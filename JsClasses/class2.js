/*
 BROWSER OBJECTS
  1) Window object: The window object represents a window in the browser. 
        Some methods in the window object include;
            - alert()
            - prompt(): Used to receive information from the user.
            - confirm(): Uses the 'ok' button for YES and 'cancel' button for NO.
*/

// ALERT
alert ("Welcome To Class!!!");

// PROMPT
let userName = prompt("Enter your full name: ");

// CONCATENATION: This is the process of adding strings together or adding a variable to a string, using the plus "+" symbol.
let greet = "Hello " + "World";
let sayHi = "Hi " + userName + " How are you?";
console.log(greet);
console.log(sayHi);


/* 
    STRING LITERALS OR TEMPLATE LITERALS;
        Instead of concatenation, we use this to add strings or variable and strings together.

        It is mostly used, it is easier than concatenation and it is modern than concatenation.

        SYNTAX:
            To use this, we write our code inside the baktik symbol (``) - This symbol is found under the "esc key" on our keyboard.

            Then, to add a variable to a string, we write the code inside the baktik symbol and add this format " ${ variableName } " to add the variable together with the string.

        E.g;
            let sayHello = `Hello ${userName}, how are you doing today?`;
*/


// let sayHello = `Hello ${userName}, how are you doing today?`;


// let color = prompt(userName + " Enter your desired color: ");
let color = prompt(`Hi ${userName} Enter your desired color: `);
document.body.style.backgroundColor = color;

// CONFIRM
let student = confirm("Are you a student?");
if(student) {
    document.write("Hello World, I am a student");
} else{
    document.write("Sorry World, I am not a student");
};


