let i = 0;
let colors = ["red", "white", "blue", "lavender", "violet", "grey"];
function changeColor() {
    document.body.style.backgroundColor = colors[i];
    i = i + 1;
    if (i >= colors.length) {
        i = 0;
    };
};


// we assigned the setInterval function to the variable (interval) so it'll have an ID.
const interval = setInterval ( () => {
    console.log('Executed every 3 seconds');
    document.body.style.backgroundColor = colors[i];
    i++;

    if (i == colors.length) {
        i = 0;
    }
}, 3000);

// setTimeout ( () => clearInterval(interval), 30000);

// SDLC