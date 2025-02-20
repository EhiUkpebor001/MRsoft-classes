/*
    Part 1: Create a Simple Web Page
    - Create `index.html` with a button labeled "Get Users" and a `<div>` for output.

    Part 2: Write Asynchronous Code
    - Create `fetchUsers()` in `script.js`:
        1. Use `fetch()` with `await` to get data from `https://jsonplaceholder.typicode.com/users`.
        2. Handle errors with `try...catch`.
        3. Display user names and emails on the page.

    Part 3: Add Error Handling
    - Show an error message if the API fails. (for instance; in cases where user doesn't have data)

    Part 4: Add a Loading Indicator (Optional Challenge)
    - Show "Loading..." before displaying users.

    Also:
    - Add a 2-second delay using `setTimeout()` wrapped in a `Promise`.

*/

// WRONG SOLUTION

let getButton = document.querySelector("#getBtn");
let output = document.querySelector("#output");

getButton.addEventListener("click", fetchUsers);

/*
function func1 (){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Loading...");
        }, 2000);
    });
}

async function fetchUsers() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const usersUrl = response.url;
        users.src = usersUrl;
    } catch (error) {
        alert("Check internet connection!");
    }
};

func1.then(value => {console.log(value); return fetchUsers()});

*/


// CORRECTION
async function fetchUsers() {
    output.innerHTML = 'Loading...';
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));    // 2-second delay
        const response = await fetch ('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const users = await response.json();
        output.innerHTML = users.map(user => `<p>${user.name} - ${user.email}</p>`).join('');
    } catch (error) {
        output.innerHTML = `<p style = "color:red;"> Error: ${error.message}</p>`;
    }
}