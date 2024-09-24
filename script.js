const number = document.getElementById('display');
function appendToDisplay (value){
    number.value += value;
};

const buttonC= document.getElementById('display').value = '';
function clearDisplay(buttonC) {
    if(buttonC !== "=") {
        display.value = "";
    }
};

function deleteLast(){
let display = document.getElementById('display').value;
document.getElementById('display').value = display.substring(0, display.length - 1);
};

function calculateResult() {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
};
