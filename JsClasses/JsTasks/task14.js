/*
    --- Products of Array Except Self leetcode Q:238
        Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

        Each product is guaranteed to fit in a 32-bit integer.

        Follow-up: Could you solve it in 
        O(n)
        O(n) time without using the division operation?

        Example 1:
        Input: nums = [1,2,4,6]
        Output: [48,24,12,8]

        Example 2:
        Input: nums = [-1,0,1,2,3]
        Output: [0,-6,0,0,0]
*/

// My solution - wrong

// function numsProduct (nums) {
//     let output = [];
//     let left = 0; 
//     let right = nums.length - 1;

//     while (left < right) {

//         let eqn = nums[left] * nums[right];
//         output.push(eqn);
// n
//         left ++;
        
//     };
//     return output;
// };

// let nums = [1, 2, 4, 6];
// console.log(numsProduct(nums));

// let nums2 = [-1, 0, 1, 2, 3];
// console.log(numsProduct(nums2));


// Correction

function productExceptSelf (num) {
    let n = num.length;
    let result = new Array (n); // We're creating an array of the number of items in the 'num' array - i.e the given array

    for (let i = 0; i < n; i++) {
        let multiplier = 1;
        for(let j = 0; j < n; j++) {
            if (i !== j) {
                multiplier *= num[j];
            };
        };
        result[i] = multiplier;
    };
    return result;
};

let nums = [1, 2, 4, 6];
console.log(productExceptSelf(nums));

let nums2 = [-1, 0, 1, 2, 3];
console.log(productExceptSelf(nums2));