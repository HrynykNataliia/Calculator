const calculator = {
    "+": (x, y) => x + y,
    "-": (x, y) => x - y,
    "*": (x, y) => x * y,
    "/": (x, y) => x / y,
    "mod": (x, y) => x % y,
    "log": (x, y) => Math.log2(y) / Math.log2(x),
    "x^y": (x, y) => Math.pow(x, y),
    "x^1/y": (x, y) => Math.pow(x, 1 / y)
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
    screen3.innerHTML = this.innerHTML;
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

for (let button of document.getElementsByClassName("numpad-number")) {
    button.addEventListener("click", onNumberClick);
}

for (let button of document.querySelectorAll("[doubleOperand]")){
    button.addEventListener("click", onDoubleOperandClick);
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

