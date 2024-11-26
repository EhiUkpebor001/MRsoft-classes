// STRING METHODS

let str = "Welcome to Javascript";
let newString = "Wel,come to, Java,script";
let singleWord = "Ehiremhen";
let letterArray = singleWord.split("");

/*
    1) length property: It is used to get the length of a string. 
                        When counting the length of a string, it also counts the space and other characters.
*/
console.log("The length property in string: ");
console.log(str.length);

/*
    2) split method: It is used to split the string into an array of words.
                    The ", " in the split method, tells it to split the string where ever there is a comma(,) and space( ).
                    If it's only "," in the split method, it means it will only split the string where ever there is a comma(,).
                    This creates a new array, comprising of each split words.
                    A delimiter is a seperator. For instance, in the console.log below, the delimiters are; space for line23, comma for line24, etc.
*/
console.log("\nThe split() method in string: ");
console.log(str.split(" "), "\n");
console.log(newString.split(","), "\n");
console.log(newString.split(", "), "\n");
// console.log(singleWord.split(""));       // If there is no delimiter specified, each letter is seperated into an array element.
console.log(letterArray);

/*
    3) replace method: It is used to replace matching texts.
                    We can replace texts using these two formats;
                        -- Using quotation mark: The word to be replaced will be put inside a quotation mark (" "). E.g; "to" , "Welcome"

                        -- Using global symbol: The text to be replaced will be put inside two forward slashs (//) with the letter 'g' beside the last slash. 
                                        E.g; /e/g , /c/g.
                                        Adding the letter 'g' means that the required text will be replaced in ALL places it occurs.
                                        If the 'g' is removed, only the first occurence of the text will be replaced.
*/
console.log("\nThe replace() method in string: ");
console.log(str.replace("to", "?"), "\n");
console.log(str.replace(/e/g, "*"), "\n");
console.log(str.replace(/to/g, "#"));
console.log("\nUsing the replace() method on letter 'e' without the letter 'g': ");
console.log(str.replace(/e/, "%"), "\n");
console.log(str);

/*
    4) includes method: It is used to check if the string has a particular word. If it does, it returns 'true', if not it'll return 'false'.
*/
console.log("\nThe includes() method in string: ");
console.log(str.includes("Javascript"));

/*
    5) toLowerCase()
*/
console.log("\nThe toLowerCase() method in string: ");
console.log(str.toLowerCase());

/*
    6) toUpperCase()
*/
console.log("\nThe toUpperCase() method in string: ");
console.log(str.toUpperCase());

/*
    7) slice(start, end) method
*/
console.log("\nThe slice() method in string: ");
console.log(str.slice(0, 6), "\n");
console.log(str.slice(0, 6).toUpperCase());

/*
    8) substring: It is similar to the slice method, but DOESN'T ALLOW NEGATIVE INDEXES.
*/
console.log("\nThe substring() method in string: ");
console.log(str.substring(11), "\n");
console.log(str.substring(11, 14));

/*
    9) charAt(index): It returns the character at a specified index.
*/
console.log("\nThe charAt() method in string: ");
console.log(str.charAt(11));

/*
    10) charCodeAt(index): It returns the unicode of the character at the specified index.
*/
console.log("\nThe charCodeAt() method in string: ");
console.log(str.charCodeAt(12));

/*
    11) concat(): It creates a new string by merging existing strings.
*/
console.log("\nThe concat() method in string: ");
let str1 = "Hi, there";
let str2 = str1.concat(" ", str);
console.log(str2);


// Cont. of ARRAY METHODS

/*
    12) sort(): It is used to sort array elements in ascending or descending orders.
*/
console.log("\nThe sort() method: ");
let letterSort = letterArray.sort();
console.log(letterSort);

console.log("\nThe join() method: ");
let newLetter = letterSort.join("");
console.log(newLetter);