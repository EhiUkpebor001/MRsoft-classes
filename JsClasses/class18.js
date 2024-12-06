// JAVASCRIPT SETS

/*
    Javascript Sets;
        A set is a collection of unique values.
        Each value can only occur once in a set.
        The values can be of any data type.

        Different things can be in or added to a set, it can be; arrays, variables, strings, etc.
*/

// Creating a set
console.log("Creating a Set:");

const points = new Set ([1, 2, 3]);
console.log(points);

// Adding values to a set
console.log("\nUsing 'add()' to add items to a Set:");

points.add(4);
points.add(3);
points.add(5);
console.log(points);

// Deleting values from a set
console.log("\nUsing 'delete()' to delete an item in a Set:");

points.delete(3);
console.log(points);

// Checking the size of a set
console.log("\nThe size of the Set is ", points.size);

// Checking for a value in a set
console.log("\nUsing 'has()' to check for an item in a Set:");

console.log(points.has(3));
console.log(points.has(4));

// Looking through a set
console.log("\nLooking through a Set:");

for (let point of points) {
    console.log(point);
}


// JAVASCRIPT MAPS

/*
    A map holds key-value pairs (i.e objects), where the keys CAN BE of any datatype.
    A map remembers the original insertion order of the keys.
    A map is a built-in data structure.

    SYNTAX:
        const maps = new Map ([
            [key, value],
            [key, value],
            ['key', value]
        ]);
*/

// Creating a map
console.log("\nCreating a map:");

const map1 = new Map ([
    ['a', 1],
    ['b', 2]
]);
console.log(map1);

// Adding values (items) to a map:  We use the 'set' method
console.log("\nUsing 'set()' to add items to a map:");

map1.set('c', 3);
map1.set('d', 4);
map1.set(5, 4);

console.log(map1);

// Checking for an item in a map
console.log("\nUsing 'has()' to check for an item in a map:");

console.log(map1.has('c'));

// Deleting an item or value in a map
console.log("\nUsing 'delete()' to delete an item in a map:");
map1.delete('b');
console.log(map1);

// Get an item from the map
console.log("\nUsing 'get()' to get an item from a map:");
console.log(map1.get('a'));

// To get the number of items in a map
console.log("\nThe size of the map is ", map1.size);

// To look through a map
console.log("\nLooking through a map:");

for (const [key, value] of map1) {
    console.table(`${key} : ${value}`);
};

// To clear every item inside a map
console.log("\nUsing 'clear()' to clear a map:");
map1.clear();
console.log(map1);