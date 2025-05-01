// Get display element
const display = document.getElementById('display');

// append values to the display
function appendToDisplay(value) {
    display.value += value;
}

// calculate the result
function calculate() {
    try {
        // Evaluate the expression in the display
        display.value = eval(display.value);
    } catch (error) {
        // Handle invalid expressions
        display.value = 'Bruh!';
    }
}

// clear the display
function clearDisplay() {
    display.value = '';
}