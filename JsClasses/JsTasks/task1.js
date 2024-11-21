/*
    Task: Create an ATM Machine Simulator

    Write a JavaScript program to simulate an ATM machine with the following functionalities:
        Check Balance: Display the current balance.
        Deposit: Allow the user to deposit money into their account.
        Withdraw: Allow the user to withdraw money from their account.
        Exit: Terminate the program.

    Your program should:
        Display a menu of options to the user.
        Prompt the user to choose an option.
        Perform the selected operation based on the user's choice.
        Continuously prompt the user until they choose to exit.
        Remember to handle cases such as; insufficient funds for withdrawals and invalid input.
        
    For Example:
        Welcome to the ATM Machine
        1. Check Balance
        2. Deposit
        3. Withdraw
        4. Exit
        Enter your choice: 1
            Your current balance is: $1000
        Enter your choice: 2
            Enter amount to deposit: 500
            Deposit successful. Your new balance is: $1500
        Enter your choice: 3
            Enter amount to withdraw: 200
            Withdrawal successful. Your new balance is: $1300
        Enter your choice: 4
            Thank you for using the ATM. Goodbye!
*/

let user = prompt("Enter your name: ");
user = user.charAt(0).toUpperCase() + user.slice(1).toLowerCase();
let balance = 0; // we put the balance outside the do while loop, so it can keep updating. If it is inside the loop, it'll always be O each time the loop runs, 
                 //   regardless of if an amount has been deposited inside.

do{
    alert(`Welcome ${user} to the ATM Machine`);
    let operations = prompt(`
        1. Check Balance \n
        2. Deposit \n
        3. Withdraw \n
        4. Exit \n
        ${user} enter your choice: `);

    let currencySymbol = '$';
    if (operations == 1) {
        console.log(`Your current balance is: ${currencySymbol}${balance}`); 
    } else if (operations == 2) {
        let deposit = Number(prompt("Enter amount to deposit: ")); 
        balance += deposit;
        console.log(`Deposit successful. Your new balance is: ${currencySymbol}${balance}`);
    } else if (operations == 3) {
        let withdraw = Number(prompt("Enter amount to withdraw: "));
        if (balance >= withdraw) {
            balance -= withdraw;
            console.log(`Withdrawal successful. Your new balance is: ${currencySymbol}${balance}`);
        } else {
            console.log("Insufficient Funds");
        }
    } else if (operations == 4) {
        console.log(`${user}, Thank you for using the ATM. Goodbye!`);
        break;
    } else {
        console.log(`Sorry ${user}, Invalid input.`);
    }

} while (true);    // This helps to make the code run continuously, because the user has not selected 4, the code hasn't broken/ended. So the code is still
                    //  'true' therefore it runs continually.



//  ANOTHER SOLUTION; by creating a 'stop' variable to help continue (in the while loop) and end (in the last if statement) the program.

// let stop;
// do{
//     alert(`Welcome ${user} to the ATM Machine`);
//     let operations = prompt(`
//         1. Check Balance \n
//         2. Deposit \n
//         3. Withdraw \n
//         4. Exit \n
//         ${user} enter your choice: `);

//     let currencySymbol = '$';
//     if (operations == 1) {
//         console.log(`Your current balance is: ${currencySymbol}${balance}`); 
//     } else if (operations == 2) {
//         let deposit = Number(prompt("Enter amount to deposit: ")); 
//         balance += deposit;
//         console.log(`Deposit successful. Your new balance is: ${currencySymbol}${balance}`);
//     } else if (operations == 3) {
//         let withdraw = Number(prompt("Enter amount to withdraw: "));
//         if (balance >= withdraw) {
//             balance -= withdraw;
//             console.log(`Withdrawal successful. Your new balance is: ${currencySymbol}${balance}`);
//         } else {
//             console.log("Insufficient Funds");
//         }
//     } else if (operations == 4) {
//         console.log(`${user}, Thank you for using the ATM. Goodbye!`);
//         stop = operations;
//         // break;
//     } else {
//         console.log(`Sorry ${user}, Invalid input.`);
//     }

// } while (stop != 4);    // This helps to make the code run continuously, till stop == 4, then the code will end, since when it's in that 'if statement' the
                        //  code is to end.