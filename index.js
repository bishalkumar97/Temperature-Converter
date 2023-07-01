function temperature() {
    // Get the input value
    const celsius = parseFloat(document.getElementById('temp').value);

    // Perform the conversion to Fahrenheit
    const fahrenheit = (celsius * 9 / 5) + 32;

    // Update the result element with the converted value
    document.getElementById('result').textContent = fahrenheit + "F";
}

// Event listener for the Reset button
document.getElementById('btn-reset').addEventListener('click', function () {
    location.reload(); // Reload the page
});
