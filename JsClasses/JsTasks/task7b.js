
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


function isAlphanumeric (char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')     
};

function isPalindrome (s) {
    let start = 0;
    let end = s.length - 1;

    while(start < end) {
        while(start < end && isAlphanumeric(s[start])) {
            start ++;
        };
        while(end > start && isAlphanumeric(s[end])) {
            end --;
        };
        if (s[start].toLowerCase() !== s[end].toLowerCase()) {
            return false;
        };
        start ++; end --;
    };
    return true;
};

let s1 = "Was it a car or a cat I saw?";
let s2 = "tab a cat";

console.log(isPalindrome(s1));
console.log(isPalindrome(s2));

// isAlphanumeric(s[start])     -- This checks the particular character at that point. It means isAlphanumeric(s[0]), isAlphanumeric(s[2]), etc.