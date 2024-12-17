// HIGHER ORDER FUNCTIONS

/*
    What are Higher Order Functions?
        These are functions that can take other functions as arguments and return their results. E.g; forEach(), filter(), sort(), map(), etc.
*/


// Taking a function as an argument i.e. Callback function
function sayHello () {
    console.log("Hello");
};

// function greet (funcArg) {
//     funcArg();
// }

// greet(sayHello);
// console.log("\n");


//  ---------------
function greetMe (funcArg, n) {
    for (let i = 0; i < n; i++) {
        funcArg();
    };
};

greetMe(sayHello, 4);

//  --------------
setTimeout(() => greetMe(sayHello, 2), 4000);       // This adds "Hello" 2 more times, after 4000 secs has passed.


// Returning a function
function multiplier (factor) {
    return function (x) {
        return factor * x;
    };
};

let double = multiplier(2);     // A function that doubles a number
console.log(double(5));         // Output: 10

// In the output, '10' came before the remaining 2 Hello (they were the output of the setTimeout function), and that process is called an Asynchronous paradigm/code.

// Synchronous code is from top to bottom



//      ------------------------- ARRAY METHODS in higher order functions -------------------------

const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// let retailCompanies = [];
// for (let i = 0; i < companies.length; i++) {
//     if (companies[i].category == "Retail") {
//         retailCompanies.push(companies[i]);
//     };
// };
// console.table(retailCompanies);


/*
      -------------------------   forEach () -----------------------------
    forEach() is used to look through an array.
*/

companies.forEach((company) => console.log(company.category));
console.log("\n");

// Exercise
companies.forEach((company) => {
    let subtract = company.end - company.start;
    console.log(`${company.name} reg. date is ${company.start} - ${company.end} = ${subtract}` , "\n");
});


/*
    ------------------------------------- filter() ------------------------------
    It is used to get elements in an array that fulfill a specific requirement.
*/

const cannotDrink = ages.filter(function(age) {
    if(age <= 18) {
        return true;
    };
});

console.table(cannotDrink);

// Exercise
const retail = companies.filter((comp) => {
    if (comp.category == "Retail") {
        return true;
    };
});
console.table(retail);

//     Filter the companies array and give me a new array of companies in the retail category and of companies that has lasted more than 10 years 
const retailedCompanies = companies.filter((company) => company.category === "Retail");
const lastedTenYears = companies.filter((company) => company.end - company.start >= 10);

console.table(retailedCompanies);
console.table(lastedTenYears);


/*
    ------------------------------ map() --------------------------
*/

const companyNames = companies.map((company) => `${company.name} is a wonderful company.`);

// Detailed explanation
    // const companyNames = [];
    // for (let i = 0; i < companies.length; i++) {
    //     companyNames.push(companies[i]);
    // };
    // console.table(companyNames);



/*
    ------------------------------ sort() --------------------------
*/
// Ascending order
const sortedAges = ages.sort((a, b) => a - b);
console.log(sortedAges);

// Descending order
const descendSortedAges = ages.sort((a, b) => b - a);
console.log(descendSortedAges);


// Detailed explanation 1
    // let swapped;
    // const sortArray = (arr) => {
    //     do {
    //         swapped = false
    //         for(let i = 0; i < arr.length; i++) {
    //             if (arr[i] > arr[i + 1]) {
    //                 let reservedNum = arr[i];
    //                 arr[i] = arr[i + 1];
    //                 arr[i + 1] = reservedNum;
    //                 swapped = true;
    //             }
    //         }
    //     } while(swapped)
    //     return arr;
    // }

    // console.log(sortArray(ages));


// Detailed explanation 2
    // for (let i = 0; i < ages.length; i++) {
    //     for (let j = 0; j < ages.length - 1; j++) {
    //         if (ages[j] > ages[j + 1]) {
    //             const temp = ages[j];
    //             ages[j] = ages[j + 1];
    //             ages[j + 1] = temp;
    //         };
    //     };
    // };