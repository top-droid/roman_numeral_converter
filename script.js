// variables

const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const result = document.getElementById('output');

// functions

// Limit the input to 4 digits
const inputDigitLimit = () => {
    if (input.value > 4) {
        input.value = input.value.slice(0, 4);
    }
}

// show result container, if it's hidden
const showContainer = () => {
    if (result.classList.contains('hidden')) {
        result.classList.toggle('hidden');
    }
}

// checking if the input is between 1 and 3999
const inputCheck = () => {
    const numberInput = Number(input.value);
     if (numberInput === 0 || !Number.isInteger(numberInput)) {
        showContainer();
        result.innerHTML = "Please enter a valid number";
     } else if (numberInput < 0) {
        showContainer();
        result.innerHTML = "Please enter a number greater than or equal to 1";
     } else if (numberInput > 3999) {
        showContainer();
        result.innerHTML = "Please enter a number less than or equal to 3999";
     }
};




// event listeners

input.addEventListener('input', inputDigitLimit);

button.addEventListener('click', inputCheck);

