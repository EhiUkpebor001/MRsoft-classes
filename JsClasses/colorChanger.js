let i = 0;
let colors = ["red", "white", "blue", "lavender", "violet", "grey"];
function changeColor() {
    document.body.style.backgroundColor = colors[i];
    i = i + 1;
    if (i >= colors.length) {
        i = 0;
    };
};

// SDLC