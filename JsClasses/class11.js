
const colors = new Array('Red', 'Yellow', 'Green', 'Blue', 'Violet', 'Orange');


/*
     ARRAY METHODS
        1. join(): This is used to join all array elements into a string.
*/
console.log("The join() method: Converts array to string ");
let colorsTogether = colors.join();
let colorsJoin = colors.join(", ");
console.log(`${colorsTogether} \n`);
console.log(`${colorsJoin} \n`);

/*
      2. split(): This is the opposite of join().
                Converts a string into an array by splitting it at specified delimiters.
*/
console.log("The split() method: Converts string to array ");
let colorsSplitTogether = colorsJoin.split();
let colorsSplit = colorsJoin.split(", ");
console.log(colorsSplitTogether, "\n");
console.log(colorsSplit, "\n");

//  3. pop(): This is used to REMOVE the LAST element from an array.
console.log("The pop() method: ");
let popColors = colors.pop();
console.log(`${popColors} \n`);
console.log(colors, "\n");
console.table(colors);

/*
      4. push(): This is the opposite of pop().
                ADDS an item to the END of an array.
*/
console.log("\nThe push() method: ");
colors.push("Grey");
colors.push("black");
console.table(colors);

//  5. shift(): This is used to REMOVE the FIRST element in an array.
console.log("\nThe shift() method: ");
let colorsShift = colors.shift();
console.log(colorsShift, "\n");
console.log(colors, "\n");
console.table(colors);

/*
      6. unshift(): This is the opposite of shift().
                    ADDS an element to the BEGINNING of an array.
*/
console.log("\nThe unshift() method: ");
colors.unshift("purple");
console.log(colors, "\n");
console.table(colors);

//     7. splice(): It is used to add or remove elements at a particular position.

//  USING splice() to ADD elements;
console.log("\nThe splice() method to add elements: ");
colors.splice(2, 0, "pink", "lightblue");

/*
The first parameter (2) defines the position where the new elements should be added or spliced in.
The second parameter (0) defines how many elements to be removed.
The other parameter defines the elements to be added.
*/
console.table(colors);

//  USING splice() to REMOVE elements;
console.log("\nThe splice() method to remove elements: ");
colors.splice(3, 1);        // This shifts the next element to the index of the removed element.
// colors.splice(3, 2);
console.table(colors); 

//     8. delete: Used to delete an item of an array at a specific index, but delete leaves UNDEFINED SPACE in the array.
console.log("\nThe delete keyword: ");
delete colors[3];
console.table(colors);  // If you notice in the output, index 3 is missing, therefore creating an undefined space.

/*
      9. slice(): This method creates a new array, it takes two arguments, the starting index and the ending index. 
                However, it doesn't delete the elements taken from the parent array. It just creates a new array comprising of those elements.
*/                
console.log("\nThe slice() method: ");
const fruits = ["orange", "apple", "grape", "pear", "coconut", "carrot"];
let newFruits = fruits.slice(2, 4);
console.table(newFruits);
console.table(fruits);

//      10. concat(): This method creates a new array by merging existing arrays.
console.log("\nThe concat() method: ");
const colorFruits = colors.concat(fruits);
console.table(colorFruits);     // Notice index 3 is missing because we 'deleted' it in the delete keyword example.

//      11. sort(): It is used to sort array elements in ascending or descending orders.
console.log("\nThe sort() method: ");
let fruitsSort = fruits.sort();
console.log(fruitsSort);

