//  THE GLOBAL OBJECT

/*
        The Global Object:  This provides a way to access 'globally scoped' properties and methods. Depending on the environment (browser or nodeJS).

        COMMON GLOBAL PROPERTIES
            1) NaN        -   represents "Not a Number" value.
            2) undefined  -   represents undefined values.
            3) infinity   -   represents positive infinity.
            4) globalThis -   provides a standard way to access the global object across environments.
*/

console.log(NaN, Infinity, globalThis);


//      COMMON GLOBAL METHODS

//          1) eval():  Evaluates Javascript code represented as strings.
console.log("\n\n eval('22 + 2') = ", eval('22 + 2'));

//          2) isNaN():  Determines if a value is NaN.
console.log("isNaN('2 + 2') = ", isNaN('2 + 2'));

//          3) isFinite():  Determines if a value is a finite number.
console.log("isFinite(10) = ", isFinite(10));

//          4) parseFloat():  Parses a string and returns a floating-point number.
console.log("parseFloat('3.142') = ", parseFloat('3.142'));

//          5) parseInt():  Parses a string and returns an integer.
console.log("parseInt('3.642') = ", parseInt('3.642'));


/*
        BROWSER SPECIFIC-GLOBAL OBJECT(window).

            In the browser, the global object window has its properties and methods.
                methods:    alert(), prompt(), confirm(), window.location.href, etc.
*/

//     nodeJS GLOBAL OBJECT
//      properties:
console.log(__dirname, __filename);

/*
        methods:
            1)  console:    Provides a simple debugging console.
                        --  console.log, 
                        --  console.error, 
                        --  console.warn, 
                        --  console.info, 
                        --  console.table, etc.


            2)  setTimeout() : This just calls a function after a specified number of milliseconds. It is a callback function. It takes in two things;
                            --  The function that does something
                            --  The particular time


            3)  setInterval() : This just runs a function at intervals after a specified number of milliseconds. It is a callback function. It takes in two things;
                            --  The function that does something
                            --  The particular time at interval the function should run.    
                            
            4)  clearInterval() : This is used to stop the setInterval loop.
*/

/* --------first format--------
    const func = () => {console.log('Executed after 3 seconds')};

    setTimeout(func, 3000);
*/

// --------second format----------
setTimeout( () => {
    console.log('\nExecuted after 3 seconds')
}, 3000);

// setInterval( () => {
//     console.log('Executed every 3 seconds')
// }, 3000);


// we assigned the setInterval function to the variable (interval) so it'll have an ID.
const interval = setInterval( () => {
    console.log('Executed every 3 seconds')
}, 3000);

// clearInterval()     //  This stops the setInterval loop
// interval();

setTimeout( () => clearInterval(interval), 15000);