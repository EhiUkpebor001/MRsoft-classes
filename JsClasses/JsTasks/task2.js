/*
    Given an integer array nums, create a function called hasDuplicate(nums), 
    it returns true if any value appears more than once in the array, otherwise return false.

    Example 1:
    Input: nums = [1, 2, 3, 3];
    Output: true;
    
    Example 2:
    Input: nums = [1, 2, 3, 4];
    Output: false;
*/


// Solution 1

// const hasDuplicate = (nums) => {
//     /**
//      * Check if there are duplicate values in the array.
//      *
//      * @param {number[]} nums - An array of integers.
//      * @returns {boolean} True if there are duplicates, False otherwise.
//      */
//     const uniqueNums = new Set(nums);
//     return uniqueNums.size !== nums.length;
// }

// // Example usage
// const nums1 = [1, 2, 3, 4, 5];
// console.log(hasDuplicate(nums1)); // Output: false

// const nums2 = [1, 2, 3, 4, 1];
// console.log(hasDuplicate(nums2)); // Output: true


// Another Solution - BRUTE FORCE; The parent for-loop (i) checks each number in the child for-loop (j) one by one, till a 
//                                  duplicate is found.

const hasDuplicate2 = (nums) => {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i+1; j < nums.length; j++) {
            if(nums[i] === nums[j]) {
                
                return true;
            }
        }
    }
    return false;
}

console.log(hasDuplicate2([1, 2, 3, 4, 5, 6]));
console.log(hasDuplicate2([1, 2, 2, 4, 5, 6, 6]));


/*
    A nested for loop used to compare if numbers beside each other are the same. 
    -- ONLY WORKS FOR SORTED ARRAYS

    However the problem for this equation is that, if the arrays are not sorted, then the duplicate array will not be identified.

    Example;
     let nums1 = [1, 2, 3, 4, 1]
     output: False, there are no duplicates, however there is, but it didn't identify it because the arrays are not sorted.

     let nums1 = [1, 2, 3, 4, 4]
     output: True, the duplicate will be identified, because the array is sorted, and they are beside each other.
*/

let nums1 = [1, 2, 3, 4, 4];
let nums2 = [1, 2, 3, 4, 1];

const hasDuplicate3 = function (nums) {
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 1]) {
            return true;
        }
    }
    return false;
}

console.log(hasDuplicate3(nums1));
console.log(hasDuplicate3(nums2));