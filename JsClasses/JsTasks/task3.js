/*
    Create a function that takes in an array of numbers 'sortArray(arr)' and sorts it.
    Problem - Given an array of integers, sort the array.
    const arr = [8, 20, -2, 4, -6]
    sortArray(arr) => Should return [-6, -2, 4, 8, 20]
*/

// Solution

const arr = [8, 20, -2, 4, -6];

let swapped;
const sortArray = (arr) => {
    do {
        swapped = false
        for(let i = 0; i < arr.length; i++) {
            if (arr[i] > arr[i + 1]) {
                let reservedNum = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = reservedNum;
                swapped = true;
            }
        }
    } while(swapped)
    return arr;
}

console.log(sortArray(arr));