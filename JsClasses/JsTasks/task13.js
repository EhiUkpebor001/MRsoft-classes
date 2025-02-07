/*
    --- Encode and Decode Strings Q:271
        Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

        Please implement encode and decode

        Example 1:
        Input: ["neet","code","love","you"]
        Output:["neet","code","love","you"]

        Example 2:
        Input: ["we","say",":","yes"]
        Output: ["we","say",":","yes"]

*/

const encode = (stringList) => {
    let singleString = stringList.join(", ");

    return singleString;
}

const decode = () => {
    let originalString = singleString.split("");

    return originalString;
}

console.log(encode(["neet","code","love","you"]));
console.log(decode());