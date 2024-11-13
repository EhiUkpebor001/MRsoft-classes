/*  
    What is Javascript ?
        Javascript is a programming language used to interact with elements of web pages. It allows us to add interactivity to a web page. 
        It's used to enhance our HTML and CSS, such as 
            - validating forms, 
            - handling mouse events, 
            - adding reponsiveness to the web page, etc.
        Javascript is an Object-based Scripting Language which is lightweight and cross platform. 
        It's a translated language and not a compiled language.
        The javascript translator (embedded in the browser) is responsible for translating the javascript code for the browser.

        Scripting Language is also called Programming Language.

        APPLICATIONS: 
            - Client-side validation, 
            - Dynamic drop-down menus, 
            - Current date and time display, 
            - Displaying pop-ups and dialog boxes, etc.
*/

/*
    Console is used for debugging.
        TYPES OF CONSOLE FUNCTIONS
            1) console.log()
            2) console.error()
            3) console.warn()
            4) console.clear()
            5) console.count()
*/


// Single line Comment

/*
    Using Variables in Javascript 
    
        We can use the var, let and const keywords to create variables.
        Variables are used to store data to be referenced and manipulated in a computer program.
        They also provide a way of labelling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves.
        Variables are like containers that hold data.

*/


// ES5
var a = 20;

/*
    let and const keywords are part of ES6 Javascript.
        --  The const keyword is used to declare a constant variable. i.e. The value in the variable CANNOT be changed or reassigned in the program.
        --  The let keyword is used to declare a dynamic variable. i.e. The value in the variable CAN be changed or reassigned in the program.
*/

// Semi-colons are used to end js statements.
let b = 40;
const c = "George";

// x = 30;

console.log(a)
console.log(b)
console.log(c)
// console.log(x)

// Variable declaration
let firstName, age, sex;

// Variable Initialization
sex = null;
age = 30;
console.log(sex)
console.log(age)
console.log(firstName)

// Rules For Naming Variables:
/*
  -- Let and const are the most used to declare variables while var is outdated.
  1) Use a descriptive Name
  2) Start with a letter, an undescore or dollarsign, but not with a number.
  3) Avoid Reserved Keywords. E.g let, var, for, while, const, class, if, etc.
  4) Use camelCase for multi-word names e.g myBestFriend, userName.
  5) Case Sensitivity: myVar and MyVar are treated as two different variables.
  6) Avoid Special Characters: e.g @, !, #, %, etc Apart from (_ and $)
*/

/*
    Case Conventions
    1) Camel Case: Here the first letter is lowercase and the first letter of subsequent words are capitalized. (e.g myBestFriend, customerOrderDetails, etc).
    2) Pascal Case: Here the first letter of every word is capitalized. (e.g MyVariableName, MyBestFood, etc).
    3) Snake Case: All letters are in lowercase but words are seperated by underscores. (e.g my_best_friend, customer_order_details, etc).
    4) Kebab Case: All letters are in lowercase but words are seperated by hyphen. (e.g my-best-friend, customer-order-details, etc).
*/
// Data Types In Javascript

// 1) Strings: They are used to represent text.
let customerName = "Obinna";
// let is used when we intend to reasign a variable to another value
const greeting = "Good morning Friend!";
console.log(customerName);
console.log(greeting);
// 
customerName = "Desire"
console.log(customerName);
// const is used when the value of a variable would be unchanged.
// greeting = "Good night";
console.log(greeting)

// We use the typeof() function to check the data type of a variable.
// 2) Number: It's used to represent numeric values, whether integers or decimals(floats). 
let user_age = 25;
const pi = 3.142;
console.log(age);
console.log(typeof(pi));
console.log(user_age + pi);

// 3) Boolean: They are used to represent logical values indicating true or false.
const isClosed = true;
const isOpen = false;

console.log(isClosed);
console.log(typeof(isOpen));

// 4) Null: This represents the intentional omission/absence of a value
let course = null;
let user = null;

// 5) Undefined: This represents a variable that has been declared but not assigned a value.
let x, y, z;

// 6) Bigint: Bigint is a numeric data type that can represent integers with arbitrary precision. It is denoted by appending 'n' to the end of an integer.
let bigNumber = 123456789012345678901234567890n;

// 7) Object: They are a collection of key-value pairs, where values can be of any data type. Including other objects, arrays, or functions.
const person = {
    name: 'John',
    age: 30,
    isAdmin: false
};