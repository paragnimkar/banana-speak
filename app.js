var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var output = document.querySelector("#output");

output.innerText = "Parag Nimkar";

console.log(txtInput);

function clickHandler() {
    output.innerText = "Let's translate " + txtInput.value;
}

btnTranslate.addEventListener("click", clickHandler);