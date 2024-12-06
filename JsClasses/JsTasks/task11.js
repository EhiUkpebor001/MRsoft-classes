/*
    -- 3 Sum
        Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]], 
        where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.
        The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

        Example 1:
        Input: nums = [-1, 0, 1, 2, -1, -4]
        Output: [[-1, -1, 2], [-1, 0, 1]]
        Explanation:
            nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
            nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
            nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
            The distinct triplets are [-1, 0, 1] and [-1, -1, 2].

        Example 2:
        Input: nums = [0, 1, 1]
        Output: []
        Explanation:
            The only possible triplet does not sum up to 0.

        Example 3:
        Input: nums = [0, 0, 0]
        Output: [[0, 0, 0]]
        Explanation:
            The only possible triplet sums up to 0.
*/

// My solution - wrong
/*
    const threeSum = (nums) => {
        let nums1 = 0;
        let nums2 = nums.length - 1;
        let nums3 = nums.length - 2;
        
        while (nums1 < nums2 && nums2 < nums3) {
            let triplet = {};
            let sum = nums[nums1] + nums[nums2] + nums[nums3];
            if (sum == 0) {
                sumArr = new Array (nums[nums1], nums[nums2], nums[nums3]);
                for (n of sumArr) {
                    sumKey = n.sort().join("");
                    triplet[sumKey] = triplet[sumKey] || [];
                    triplet[sumKey].push(n);
                }
            } else {
                nums2 ++; 
                nums3 ++;
            };
            console.log(Object.keys(triplet));
        };
    };

    threeSum([-1, 0, 1, 2, -1, -4]);
*/


// Correction ------ Two pointers solution
function threeSum2 (numb) {
    numb.sort((a, b) => a - b); // Sort the array
    const result = [];

    for (let i = 0; i < numb.length; i++) {
        if (numb[i] > 0) break; // If the current number is positive, break (no triplet can sum to 0)
        if (i > 0 && numb[i] === numb[i - 1]) continue; // Skip duplicate values for the first element

        let left = i + 1;
        let right = numb.length - 1;

        while (left < right) {
            let sum = numb[i] + numb[left] + numb[right];

            if (sum > 0) {
                right --;   // Decrease the right pointer to get a smaller sum
            } else if (sum < 0) {
                left ++;    // Increase the left pointer to get a larger sum
            } else {
                result.push([numb[i], numb[left], numb[right]]);    // Found a valid triplet
                left ++;
                right --;

                // Skip duplicates for the left and right pointers
                while (left < right && numb[left] === numb[left - 1]) {
                    left ++;
                };

                while (left < right && numb[right] === numb[right + 1]) {
                    right --;
                };
            };
        };
    };
    return result;
};

let numsArray = [-1, 0, 1, 2, -1, -4];
console.log(threeSum2(numsArray));