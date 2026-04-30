const priceInput = document.getElementById('price');
const litersInput = document.getElementById('liters');
const calcButton = document.getElementById('calc-btn');
const totalDisplay = document.getElementById('total-display');

calcButton.addEventListener('click', function() {
    // 1. get current values from the inputs
    const pricePerLiter = parseFloat(priceInput.value);
    const totalLiters = parseFloat(litersInput.value);

    // 2. calculation
    const finalCost = pricePerLiter * totalLiters;

    // 3. result
    if (isNaN(finalCost)) {
        totalDisplay.textContent = "Please enter valid numbers";
    } else {
        totalDisplay.textContent = "Total Cost: £" + finalCost.toFixed(2);
    }
});