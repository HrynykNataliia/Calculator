const screen = document.getElementById("screen");
const onNumberClick = function() {
    if (screen.innerHTML === "0"){
        screen.innerHTML = "";
    }
    if (screen.innerHTML.length < 15){
        screen.innerHTML += this.innerHTML;
    }
}
for (let button of document.getElementsByClassName("numpad-number")) {
    button.addEventListener("click", onNumberClick);
}

document.getElementById("reset").addEventListener("click", () => screen.innerHTML = "0");
