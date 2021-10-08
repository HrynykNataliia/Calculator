const calculator = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "mod": (x, y) => x % y,
    "log": (x, y) => Math.log2(y) / Math.log2(x),
    "^": (x, y) => Math.pow(x, y),
    "^1/": (x, y) => Math.pow(x, 1 / y),
    "1/x": (x) => 1 / x,
    "|x|": (x) => Math.abs(x),
    "n!": (x) => {
        for (let i = x - 1; i > 0; i--)
            x *= i;
        return x;
    },
    "π": Math.PI,
    "е": Math.E
};

const screen = document.getElementById("screen");
const screen2 = document.getElementById("screen2");
const screen3 = document.getElementById("screen3");

const onNumberClick = function() {
    if (screen.innerHTML === "0")
        screen.innerHTML = "";

    if (screen.innerHTML.length < 15)
        screen.innerHTML += this.innerHTML;
};

const onDoubleOperandClick = function () {
    calculate();
    screen2.innerHTML = screen.innerHTML;
    screen3.innerHTML = this.innerHTML.replaceAll(/[xy]/g, "");
    screen.innerHTML = "0";
}

const calculate = () => {
    if (screen3.innerHTML.length) {
        let x = parseFloat(screen2.innerHTML);
        let y = parseFloat(screen.innerHTML);
        screen.innerHTML = calculator[screen3.innerHTML](x, y);
        screen2.innerHTML = "";
        screen3.innerHTML = "";
    }
};

const onSingleOperandClick = function () {
    let x = parseFloat(screen.innerHTML);
    screen.innerHTML = calculator[this.innerHTML](x);
}

const onConstantClick = function () {
    screen.innerHTML = calculator[this.innerHTML];
}

for (let button of document.getElementsByClassName("numpad-number")) {
    button.addEventListener("click", onNumberClick);
}

for (let button of document.querySelectorAll("[doubleOperand]")){
    button.addEventListener("click", onDoubleOperandClick);
}

for (let button of document.querySelectorAll("[singleOperand]")){
    button.addEventListener("click", onSingleOperandClick);
}

for (let button of document.querySelectorAll("[constantButton]")){
    button.addEventListener("click", onConstantClick);
}

document.getElementById("reset").addEventListener("click", () => {
    screen.innerHTML = "0";
    screen2.innerHTML = "";
    screen3.innerHTML = "";
});

document.getElementById("dot-button").addEventListener("click", () =>
    !screen.innerHTML.includes(".") && (screen.innerHTML += "."));

document.getElementById("delete-button").addEventListener("click", () => {
    if (screen.innerHTML.length === 1)
        screen.innerHTML = "0";
    else
        screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
});

document.getElementById("calculate").addEventListener("click", calculate);

