// REVERSING STRINGS in JS

let userName = "encyclopedia";
let reversedName = "";

for(let i = userName.length - 1; i >= 0; i--) {
    reversedName += userName[i];
}

console.log(reversedName);
console.log(userName);


// Summing array values with the use of their indexes.

let numbers = [2, 1, 4, 5, 8, 6];
console.log(numbers[2] + numbers[5]);

/*
    CLASS EXERCISE
        Create a function that takes in an array and a target
        twoSum(arr, target);
        The twoSum() function should check each item of the array with every other item,
        if the sum of the two items in the array gives us the value of the target,
        return the index of the array items i.e [1, 4], else return target sum not found
*/


const twoSum = (arr, target) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == target) {
                // return [arr[i], arr[j]];   // It'll return the values in the array that sums upto the target
                return [i, j];      // It'll return the index numbers of the values that summed up upto the target.
            };
        };
    };
    return "Target sum not found";    
}

console.log(twoSum([2, 1, 4, 3, 8, 6], 9));
console.log(twoSum([2, 1, 4, 3, 8, 6], 19));