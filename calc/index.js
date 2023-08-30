var audio1 = new Audio("assets/key1.mp3");
audio1.volume = 0.1;
var audio2 = new Audio("assets/key2.mp3");
audio2.volume = 0.4;
var audio3 = new Audio("assets/key3.mp3");
audio3.volume = 0.4;
function playsound() {
    var audio = eval("audio" + Math.floor(Math.random() * 3 + 1));
    audio.currentTime = 0;
    audio.play();
}
document.addEventListener(
    "keydown",
    e => {
        console.log(e);
        switch (e.key) {
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                append(e.key);
                break;
            case "/":
            case "*":
            case "-":
            case "+":
            case "^":
                oper(e.key);
                break;
            case '=':
            case 'Enter':
                equals();
                break;
            case 'Backspace':
                backspace();
                break;
            case ',':
            case '.':
                comma();
                break;
            case 'c':
            case 'C':
                clr();
                break;
        }
    }
)
function font_change(calc_text, first_text = null) {
    var size = 48 / calc_text.textContent.length * 1.7;
    if (size >= 6.3) {
        calc_text.style.cssText = "font-size: 6.3vh";
    }
    else {
        calc_text.style.cssText = "font-size: " + size + "vh";
    }
    if (first_text != null) {
        var size = 48 / first_text.textContent.length * 1.67;
        if (size >= 2.5) {
            first_text.style.cssText = "font-size: 2.5vh";
        }
        else {
            first_text.style.cssText = "font-size: " + size + "vh";
        }
    }
}
function append(num) {
    var calc_text = document.getElementById("entry");
    if (calc_text.textContent == "0") {
        calc_text.textContent = num;
    }
    else {
        calc_text.textContent = calc_text.textContent + num;
    }
    font_change(calc_text);
    playsound();
}
function minus() {
    var calc_text = document.getElementById("entry");
    calc_text.textContent = -Number(calc_text.textContent);
    font_change(calc_text);
    playsound();
}
function oper(op) {
    var calc_text = document.getElementById("entry");
    var first_text = document.getElementById("first");
    first_text.textContent = calc_text.textContent + " " + op;
    calc_text.textContent = 0;
    font_change(calc_text, first_text);
    playsound();
}
function comma() {
    var calc_text = document.getElementById("entry");
    if (!calc_text.textContent.includes('.')) {
        calc_text.textContent = calc_text.textContent + ".";
    }
    font_change(calc_text);
    playsound();
}
function clr() {
    var calc_text = document.getElementById("entry");
    var first_text = document.getElementById("first");
    calc_text.textContent = 0;
    first_text.textContent = "";
    font_change(calc_text, first_text);
    playsound();
}
function backspace() {
    var calc_text = document.getElementById("entry");
    if (calc_text.textContent.substring(0, calc_text.textContent.length - 1) == "") {
        calc_text.textContent = 0;
    }
    else {
        calc_text.textContent = calc_text.textContent.substring(0, calc_text.textContent.length - 1);
    }
    font_change(calc_text);
    playsound();
}
function equals() {
    const roundVal = 11;
    var calc_text = document.getElementById("entry");
    var first_text = document.getElementById("first");
    if (first_text.textContent.endsWith("^")) {
        calc_text.textContent = Math.round(Math.pow(first_text.textContent.substring(0, first_text.textContent.length - 1), calc_text.textContent) * Math.pow(10, roundVal)) / Math.pow(10, roundVal);
    }
    else {
        calc_text.textContent = Math.round(eval(first_text.textContent + calc_text.textContent) * Math.pow(10, roundVal)) / Math.pow(10, roundVal);
    }
    first_text.textContent = "";
    font_change(calc_text, first_text);
    playsound();
}