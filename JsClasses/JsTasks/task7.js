/*
    -- Valid Palindrome
        Given a string s, create a function "isPalindrome(s)" that returns true if it is a palindrome, otherwise return false.

        A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

    Example 1:
        Input: s = "Was it a car or a cat I saw?"
        Output: true
        Explanation: After considering only alphanumerical characters, we have "wasitacaroracatisaw", which is a palindrome.

    Example 2:
        Input: s = "tab a cat"
        Output: false
        Explanation: "tabacat" is not a palindrome.
*/

// My Solution -- wrong

/*
    function isPalindrome (s) {
        let sConvert = s.toLowerCase();
        let newS = sConvert.replace(/[^a-zA-Z0-9]/g, "");
        
        // console.log(newS);

        let sArray = newS.split("");

        let sBackward = "";
        
        for (let i = sArray.length; i >= 0; i-- ) {
            sBackward += sArray[i];
        
            let sJoin = sArray.join("");
            if(sBackward === sJoin) {
                return true;
            } else return false;
        }
    }

    console.log(isPalindrome("Was it a car or a cat I saw?"));
*/



//  Solution 1 - Correction
const isPalindrome2 = (s) => {
    let sConvert = s.toLowerCase();
    let str = sConvert.replace(/[^a-zA-Z0-9]/g, "");
    
    let newStr = str.split("").reverse().join("");
    
    // console.log(str);
    // console.log(newStr);
    return str === newStr;
}
console.log(isPalindrome2("Was it a car or a cat I saw?"));
console.log(isPalindrome2("tab a cat"));



// Solution 2 - Correction

//          ----- A helper function ------
function isAlphanumeric (char) {
    // This checks for and uses the character ASCII code of each character, that's why 0 and 9 are in quotes. 
    // It helps check in checking if alphaNumeric values are present. If they are, it returns true, else false.
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')     
}

// console.log(isAlphanumeric('t'));
// console.log(isAlphanumeric('#'));
// console.log(isAlphanumeric(' '));
// console.log(isAlphanumeric('10'));


//      ----- MAIN FUNCTION ------
function isPalindrome1 (s) {
    let str = "";
    for (let c of s) {
        if (isAlphanumeric(c)) {
            str += c.toLowerCase();
        }
    }

    return str === str.split("").reverse().join("");
};

let s1 = "Was it a car or a cat I saw?";
let s2 = "tab a cat";

console.log(isPalindrome1(s1));
console.log(isPalindrome1(s2));


console.log("\n\nThe unicode of a - z:");
for (let i = 'a'.charCodeAt(0); i <= 'z'.charCodeAt(0); i++) {
    console.log(i);
}

console.log("\n\nThe unicode of A - Z:");
for (let j = 'A'.charCodeAt(0); j <= 'Z'.charCodeAt(0); j++) {
    console.log(j);
}

console.log("\n\nThe unicode of 0 - 9:");
for (let x = '0'.charCodeAt(0); x <= '9'.charCodeAt(0); x++) {
    console.log(x);
}

