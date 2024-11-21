/*
    What are Arrays?
        Arrays are special variables that can hold more than one value.
        
        SYNTAX:
            const arrayName = [arrayItem1, arrayItem2, ...];
        
        They can be created 
            - using the array literal notation or 
            - using the array constructor: i.e using the 'new' keyword to create an instance and the 'Array' object to create a new array.
*/

// Using the ARRAY LITERAL NOTATION
const numbers = [1, 2, 3, 4, 5, 6];

// Using the ARRAY CONSTRUCTOR: That means, using the 'new' keyword and the 'Array' object.
const oddNumbers = new Array(1, 3, 5, 7, 9);

// Arrays can contain different data types as values or items.
const newArray = ["john", "Emeka", 1, 34, 50, true, false, null, [3, 6, 9]];

/*
    An Index is the numerical representation of the position of an item in an array.
    Indexes start from 0.
    Arrays can be accessed by their index.
*/

// Accessing Arrays
console.log(newArray[1]);
console.log(newArray[5]);

// Accessing Sub Arrays
console.log(newArray[8][1]);


/*
    CLASS EXERCISE
        Create an array of six different colors.
*/

const colors = new Array('Red', 'Yellow', 'Green', 'Blue', 'Violet', 'Orange');

// The table method in console, when used in array, helps to display the array values and their index number.
console.table(colors); 

// The length property in the array gives the total number of items present in the array, this is different from the index.
console.log(colors.length);


//  To Print out the content of an array, we use the for-loop
for(let i = 0; i < colors.length; i++) {
    console.log(`I love ${colors [i]} cars.`);
    console.log(`I love ${colors} cars.`);
};

