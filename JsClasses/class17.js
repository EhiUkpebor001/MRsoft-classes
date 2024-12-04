
//  DATA STORAGE and JSON

/*
    Storing data in the browser:
        We can store data in the browser using 
            --  local storage, 
            --  session storage, and 
            --  cookies.

        1)  localStorage: This provides a way to store KEY-VALUE PAIRS in the browser with NO EXPIRATION DATE.
                        The data persists even after the browser is refreshed, closed and reopened, however, if the users device is changed, the data is NOT FOUND on the new device.
                        It provides a much larger storage limit (around 5 - 10MB per domain) compared to cookies.
*/

let firstName = prompt("Enter your first name: ");
let lastName = prompt("Enter your last name: ");

localStorage.setItem("Firstname", firstName);
localStorage.setItem("Lastname", lastName);

// NOTE:    the setItem() method is used also to update the local storage
// localStorage.setItem("Firstname", firstName);

// the getItem() method is used to access the local storage
console.log(localStorage.getItem("Lastname"), localStorage.getItem("Firstname"));

/*
    CLEARING THE LOCAL STORAGE
        This is not placed in the js file as it is, if not the content in the local storage will clear once the browser is loaded. You either put the line of code in a function, or as an onClick event in the index.html.

        localStorage.clear();  
*/


/*
        2)  sessionStorage: This is similar to the localStorage, but the data persists (the data is stored) only for the duration of the page session.
                            ONCE THE BROWSER TAB IS CLOSED, THE DATA IS CLEARED.
                            It is useful for storing TEMPORARY data, that we don't need to persist across sessions.
*/
sessionStorage.setItem("age", 30);
sessionStorage.setItem("username", "Emeka115");

//      sessionStorage uses the same methods as localStorage.


/*
        3)  cookies: These are data stored in small text files on the computer.
                    They allow us store user information on web pages.
                    Basically, they solve the problem of remembering the user's information.
*/


//    ---------------      JSON     --------------
/*
    JSON stands for Javascript Object Notation. It is a TEXT FORMAT for storing and transporting data.
        JSON makes it possible to store javascript objects as text.
    
    Example:
*/
   '{"name":"John","age":30,"car":null}'       
   //  This is an example of a JSON string.    It defines an object with three properties: name, age, car and each property has a value.
   
/*
    NOTE:   Most APIs are in JSON format, so we have to convert it to javascript object to access its content(s).
    The JSON format can be converted to a javascript object using JSON.parse()
    Javascript also has an in-built function for converting an object into a string:    JSON.stringify().
        This process is known as OBJECT SERIALIZATION and DESERIALIZTION
*/
const person = {
    lastname: "John",
    age: 40,
    country: "USA"
};

console.log(person);

//  Object Serialization -- Converting JS Objects to JSON string
const jsonString = JSON.stringify(person);
console.log(jsonString);

//  Object Deserialization -- Converting JSON string to JS Object
const jsObject = JSON.parse(jsonString);
console.log(jsObject);