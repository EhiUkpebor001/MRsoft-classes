/*
    ASYNCHRONOUS (CALLBACK FUNCTION, PROMISES, ASYNC/AWAIT) AND SYNCHRONOUS CODES

    --- SYNCHRONOUS CODES
        They execute line by line consecutively in a sequential manner, it is a code that waits for an operation to complete

    --- ASYNCHRONOUS CODES
        Allows multiple operations to be performed without waiting, it doesn't block the execution flow and allows the program to continue. (I/O operations, network requests, fetching data, etc.)
        They can be handled with callbacks, promises, Async/Await.
        e.g; setTimeout, setInterval, etc.

--- There are three ways to handle Asynchronous codes;
    1. Callback functions
    2. Promises
    3. Async/await


    --- CALLBACK    
        It is function that is passed as an argument to another function, it can be used to make the program run synchronously. It can be used to handle http requests, interacting databases, etc.

    --- PROMISES
        It makes handling asynchronous equations easier.

*/

// Method 1 (IMPROPER WAY, func2() doesn't wait for func1()):

// function func1(x, y){
//     setTimeout(()  => {
//         console.log(x + y);
//         console.log("Task 1")
//     }, 2000)
// };

// function func2() {
//     console.log("Task 2");
//     console.log("Task 3");
// }

// func1(4, 8);
// func2();


// Method 2 (THE PROPER WAY - CALLBACK FUNCTION):
// console.log('Start');
function func1(call, x, y){
    setTimeout(()  => {
        console.log(x + y);
        console.log("Task 1")
        call();
    }, 2000)
};

function func2() {
    console.log("Task 2");
    console.log("Task 3");
}

func1(func2, 4, 8);

// console.log('End');




/*
    CLASS EXERCISE
        Create a function that sums three numbers and takes in a callback function that displays the result of the sum of the three numbers.
*/

function sum (callback, x, y, z) {
    const add = x + y + z;
    callback(add);
};

function res(result) {
    console.log("The sum is =", result);
};

sum(res, 2, 3, 5);


/*
     ---  CALLBACK HELL
        This is when callbacks are nested within other callbacks to the extent where the code becomes difficult to read.
*/

// 2000 = 2seconds

/*
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 Complete");
        callback();
    }, 2000)
};

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 Complete");
        callback();
    }, 1000)
};

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 Complete");
        callback();
    }, 3500)
};

function task4(callback) {
    setTimeout(() => {
        console.log("Task 4 Complete");
        callback();
    }, 2500)
};

task1 (() => {
    task2(() => {
        task3(() => {
            task4(() => { 
                console.log("Tasks Completed.")
            })
        })
    })
}); 

*/

/*
      --------------------------------- PROMISES -----------------------------
      Promise is an object that manages asynchronous operations. We wrap a promise object around asynchronous code. A promise returns a value (resolved or rejected).
      SYNTAX:
            new Promise ((resolve, reject) => {
                    // Asynchronous code
                });

        If the code in 'reject' runs, the functions ends. That is; reject ends the function.
        Note: The “resolve” and “reject” are not keywords. you can use any name that you want to give to a function.
*/

function task1() {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 1 Complete");
        }, 2000);
    });
};

function task2 () {
    return new Promise ((resolve, reject) => {
        setTimeout (() => {
            // const taskDone = true;
            // !taskDone ? resolve("Task 2 Complete") : reject("Task 2 Not done");
            resolve ("Task 2 Complete");
        }, 1000);
    });
};

function task3 () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve ("Task 3 Complete");
        }, 3500);
    });
};

function task4 () {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve("Task 4 Complete");
        }, 2500);
    });
};

task1 ().then(value => {console.log(value); return task2()})
        .then(value => {console.log(value); return task3()})
        .then(value => {console.log(value); return task4()})
        .then(value => {console.log(value); return console.log("All taks completed.")})
        .catch(error => console.log(error));



/*
    ---------------------------------   ASYNC/AWAIT  ----------------------------------
    Async --- makes a function return a promise, while 
    Await --- makes a function wait for a promise.
*/

async function doTasks() {
    try{
        const taskOne = await task1();
        console.log(taskOne);
        const taskTwo = await task2();
        console.log(taskTwo);
        const taskThree = await task3();
        console.log(taskThree);
        const taskFour = await task4();
        console.log(taskFour);
        console.log("You finished all your tasks!");
    } catch (error){
        console.log(error);
    }
};

doTasks();