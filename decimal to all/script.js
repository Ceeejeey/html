const button = document.getElementById("convert");
const resetButton = document.getElementById("reset");

button.addEventListener('click',() => {
    const inputDecimal = document.getElementById("decimal").value;

    
    if (!isNaN(inputDecimal) && inputDecimal.trim() !== '') {
        const decimal = parseInt(inputDecimal, 10);

        const binaryDisplay = document.getElementById("display-binary");
        binaryDisplay.innerHTML = decimal.toString(2);

        const hexDisplay = document.getElementById("display-hex");
        hexDisplay.innerHTML = decimal.toString(16).toUpperCase();

        const octalDisplay = document.getElementById("display-octal");
        octalDisplay.innerHTML = decimal.toString(8);
    } else {
        alert("Please enter a valid decimal number.");
    }
});

resetButton.addEventListener('click', () => {

    const inputDecimal = document.getElementById("decimal").value;
    inputDecimal.value = "";


    const binaryDisplay = document.getElementById("display-binary");
    binaryDisplay.innerHTML = "";

    const hexDisplay = document.getElementById("display-hex");
    hexDisplay.innerHTML = "";

    const octalDisplay = document.getElementById("display-octal");
    octalDisplay.innerHTML = "";
})
