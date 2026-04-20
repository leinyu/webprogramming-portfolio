// Selecting the elements from the DOM
const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const calcButton = document.getElementById('calc-btn');
const totalDisplay = document.getElementById('total-display');

// Event listener for the button click
calcButton.addEventListener('click', function() {
    // 1. Get current values from the inputs
    const pricePerLiter = parseFloat(priceInput.value);
    const totalLiters = parseFloat(litersInput.value);

    // 2. Perform the calculation
    const finalCost = pricePerLiter * totalLiters;

    // 3. Display the result
    if (isNaN(finalCost)) {
        totalDisplay.textContent = "Please enter valid numbers";
    } else {
        totalDisplay.textContent = "Total Cost: £" + finalCost.toFixed(2);
    }
});

/*Calculation is triggered only when button is clicked.*/