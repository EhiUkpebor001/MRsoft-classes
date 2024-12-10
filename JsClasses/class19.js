//  ERROR / EXCEPTION HANDLING  AND APIs
/*
        When executing javascript codes, some errors might occur.
        Exception or error handling is the process of handling abnormal statements or error in the code.
        There are three (3) types of errors;
            1)  Syntax Error:   This is when a user makes a mistake in the pre-defined syntax of a programming language.
            2)  Runtime Error:   This occurs during the execution of a program. 
                            The codes which create run-time errors are known as EXCEPTIONS.
            3)  Logical Error:  This is an error which occurs when there is a logical mistake in the program. 
                            Example:    
                                --  An infinite loop:
                                        SYNTAX:
                                            try {
                                                //  code to be executed
                                            } catch (err) {
                                                //  code to handle the error or to display the error
                                                console.error(err);
                                            }

                                            try:    Statement tests a block of code to check for errors.
                                            catch:  Statement is used to handle the error if any is present.
                                            throw:  Statement is used to make custom errors or error messages.
                                                e.g:-   throw new Error ("This is my own error message");
*/

// The code below is mainly used to catch errors when working with APIs
try {
    const name = "Ehe";
    name = "Ehi";
} catch (err) {
    console.error(err);
}


// For creating a custom message, we use 'throw' and the 'new Error ("Error message");' 
try {
    const name = "Ehe";
    name = "Ehi";
} catch (err) {
    throw new Error ("This is my own error message");
    // console.error(err);
}



//      APIs
/*
    fetch   --  It is a function used for making HTTP requests to fetch resources (images, files, JSON style data, etc).
                It simplifies asynchronous data fetching in javascript, and it is used for interacting with API's to retrieve and send data asynchronously over the web.
            
            SYNTAX:
                fetch(url, {options});
            
            options can be HTTP methods like; put, post, delete and get. 
                The default is get.     {method: "Get"}.
            
            E.g;    let randomImg = fetch ('https://random.imagecdn.app/500/150')   OR
                    let img2 = fetch ('https://picsum.photos/200/300')


    What is an API?
        An API (Application Programming Interface), it is a set of rules and definitions that allows different software applications to communicate with each other.
        APIs define methods and data formats that applications can use to request and exchange information, enabling seamless interaction between different systems.

    Key concepts of an API
        --  Interface:  An API serves as an interface between different software components. 
                    It specifies how requests and responses should be formatted, so that systems can process data correctly.
            
        --  Endpoints:  Endpoints are specific URLs (Universal Resource Links) or URIs (Universal Resource Identifiers) where the API can be accessed.
                    Each endpoint corresponds to a specific functionality or resource that the API provides.
                        Example:    https://random.imagecdn.app/500/150     this endpoint can be used for fetching random images per call.

        --  Request and Responses:  
                Request:    A client (such as; a web browser or an application) makes a request to an API endpoint.
                        This request typically includes a HTTP method (Get, Post, Put, Delete, etc).

                Response:   The server processes the request and sends back a response which includes;
                                --  a Status code (indicating success or failure),
                                --  headers,
                                --  and ususally a body containing the requested data or confirmation of an action.
*/