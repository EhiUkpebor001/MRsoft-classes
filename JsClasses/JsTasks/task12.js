/*
    --- Container With Most Water #leetcode Q11
        You are given an integer array heights where heights[i] represents the height of the ith bar.

        You may choose any two bars to form a container. Return the maximum amount of water a container can store.

        Example 1:
        Input: height = [1,7,2,5,4,7,3,6]
        Output: 36

        index --- These specify the position of an item in an array, starting from 0 to (length - 1)
        [] --- Array
        {} --- These specifies a block of code or they are used to create an object

        Example 2:
        Input: height = [2,2,2]
        Output: 4
*/
 
const waterContainer = (heights) => {
    
    let maxAmount = 0;
    
    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            let waterAmountEqn = Math.min(heights[i], heights[j]) * (j - i);
            maxAmount = Math.max (maxAmount, waterAmountEqn);   
        };
    };
    return maxAmount;
};

let height = [1,7,2,5,4,7,3,6];
console.log(waterContainer(height));

let height2 = [2,2,2]
console.log(waterContainer(height2));


// Two-pointer solution
function waterContainer2 (heights) {
    let maxAmount = 0;
    let left = 0;
    let right = heights.length - 1;

    while (left < right) {
        let waterAmountEqn = Math.min(heights[left], heights[right]) * (right - left);
        maxAmount = Math.max (maxAmount, waterAmountEqn);

        if (heights[left] < heights[right]) {
            left ++;
        } else right -- ;
    };
    return maxAmount;
};

console.log("\n");
console.log(waterContainer2(height));

console.log(waterContainer2(height2));
