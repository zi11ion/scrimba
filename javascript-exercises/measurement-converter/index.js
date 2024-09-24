
const inputEl = document.getElementById("input-el");
const convertBtn = document.getElementById("convert-btn");
const resultsLength = document.getElementById("results-length");
const resultsVolume = document.getElementById("results-volume");
const resultsMass = document.getElementById("results-mass");

const length = "3.281"; 
const volume = "0.264"; 
const mass = "2.204"; 

convertBtn.addEventListener("click", function() {
    const inputValue = inputEl.value;
    console.log(inputValue)
    
    resultsLength.textContent = `${inputValue} meters = ${Number(inputValue * length).toFixed(3)} feet | ${inputValue} feet = ${Number(inputValue / length).toFixed(3)} meters`;

    resultsVolume.textContent = `${inputValue} liters = ${Number(inputValue * volume).toFixed(3)} gallons | ${inputValue} gallons = ${Number(inputValue / volume).toFixed(3)} liters`;

    resultsMass.textContent = `${inputValue} kilos = ${Number(inputValue * mass).toFixed(3)} pounds | ${inputValue} pounds = ${Number(inputValue / mass).toFixed(3)} kilos`;
    
})