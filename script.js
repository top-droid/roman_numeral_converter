// variables
const input = document.getElementById('number');
const button = document.getElementById('convert-btn');
const result = document.getElementById('output');
const romanNumbersData = [
    { letter: 'M', value: 1000 },
    { letter: 'CM', value: 900 },
    { letter: 'D', value: 500 },
    { letter: 'CD', value: 400 },
    { letter: 'C', value: 100 },
    { letter: 'XC', value: 90 },
    { letter: 'L', value: 50 },
    { letter: 'XL', value: 40 },
    { letter: 'X', value: 10 },
    { letter: 'IX', value: 9 },
    { letter: 'V', value: 5 },
    { letter: 'IV', value: 4 },
    { letter: 'I', value: 1 }
];

// functions

// Limit the input to 4 digits
const inputDigitLimit = () => {
    if (input.value.length > 4) {
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
    } else if (numberInput < 1) {
        showContainer();
        result.innerHTML = "Please enter a number greater than or equal to 1";
    } else if (numberInput > 3999) {
        showContainer();
        result.innerHTML = "Please enter a number less than or equal to 3999";
    }
};

// converting number maths
const numberToRoman = (num) => {
    let romanNumber = '';

    for (let i = 0; i < romanNumbersData.length; i++) {
        while (num >= romanNumbersData[i].value) {
            romanNumber += romanNumbersData[i].letter;
            num -= romanNumbersData[i].value;
        }
    }
    return romanNumber;
};

// event listeners
input.addEventListener('input', inputDigitLimit);

button.addEventListener('click', () => {
    inputCheck(); // Validate input first
    showContainer();
    const numberInput = Number(input.value);
    if (numberInput >= 1 && numberInput <= 3999) {
        const romanNumeral = numberToRoman(numberInput);
        result.innerHTML = romanNumeral; // Display result
    }
});