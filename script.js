const input = document.getElementById('number');

// Limit the input to 4 digits

input.addEventListener('input', () => {
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
})