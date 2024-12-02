// Javascript BUILT-IN OBJECTS

/*
    1)  Date: Used to work with dates and times. It uses the date and time of our device.
        methods: getDate(), getMonth(), getFullYear(), getHours(), etc.
*/

const today = new Date();

console.log(today, "\n");

console.log(today.getDay());        // The days of the week is Sun, Mon, Tues, Wed, Thurs, Fri, Sat  (i.e 0, 1, 2, 3, 4, 5, 6)
console.log(today.getDate());     // This brings out the current date 
console.log(today.getMonth());        // This brings out the index of the current month (Remember, the first month - January, has the index number '0')
console.log(today.getFullYear());
console.log(today.toDateString(), "\n");        // Brings out the full date as a string

console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getSeconds());
console.log(today.toTimeString(), "\n");    // Brings out the full time as a string


/*
    Class Exercise 1
     Create an array of days, then use the getDay() method to output the current day i.e "Today is Thursday".
*/

const days = new Date();
const daysArray = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// This is the same thing as console.log(`Today is ${daysArray[4]}`);  ==== which outputs: Today is Thursday
// [days.getDay()] is used to get the index number of the current day.
console.log(`Today is ${daysArray[days.getDay()]}`);       


/*
    Class Exercise 2
     Create an array of months, then use the getMonth() method to output the current month i.e "We are in the month of November".
*/

const months = new Date();
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];
console.log(`We are in the month of ${monthArray[months.getMonth()]}`);



/*
        2)  Math: It provides in-built mathematical functions and constants.
            properties: 
                --  pi, 
                --  E meaning exponentials, etc.
            methods: 
                -- abs()        meaning Absolute.   It changes every negative value/number to a positive number.
                -- sqrt()       meaning Square root.
                -- random()     used to get random numbers between 0 and 1. These numbers are decimals.
                -- floor()      used to ROUND DOWN a number to the nearest integer.
                -- ceil()       used to ROUND UP a number to the nearest integer.
                -- round()      used to ROUND a number to the nearest whole number. It is more accurate in normal maths calculation, 
                                                but in programming, it is accurate depending on its use case.
*/

console.log("\nMath.PI = ", Math.PI);
console.log("Math.E = ", Math.E);

console.log("Math.abs(-5) = ", Math.abs(-5));
console.log("Math.sqrt(16) = ", Math.sqrt(16));
console.log("Math.random() = ", Math.random());

console.log("Math.floor(3.7) = ", Math.floor(3.7));     // outputs: 3
console.log("Math.ceil(3.2) = ", Math.ceil(3.2));      // outputs: 4

console.log("Math.round(3.7) = ", Math.round(3.7));     // outputs: 4
console.log("Math.round(3.2) = ", Math.round(3.2));     // outputs: 3


/*
        Class Exercise 3
            Get random numbers between 1 and 10

        Class Exercise 4
            Get random numbers between 1 and 10 that are not decimals.

        Class Exercise 5
            Create a function that generates a specific number (n) of random integers between 1 and 100.
                The number of random numbers in the output is dependent on the input (n).
            i.e randInt(5) -- 13, 2, 78, 21, 84
                randInt(10) -- 8, 1, 4, 99, 49, 22, 51, 56, 20, 7
*/

// Solution for exercise 3
console.log("\nRandom numbers between 1 and 10: ");
console.log(Math.random() * 10);

// Solution for exercise 4
console.log("\nRandom numbers between 1 and 10 that are not decimals: ");
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

// Solution for exercise 5
function randInt(n) {
    let output = "";
    for (let i = 0; i < n; i++) {
        let randomNumberGen = Math.round(Math.random() * 100);
        // i+1 is targeting the next element.
        (i + 1 == n) ? output = output + randomNumberGen + "." : output += `${randomNumberGen}, `;
    }
    console.log(output);
}

console.log("\nRandom numbers between 1 and 100 dependent on the input: ");
randInt(5);
randInt(10);