/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const feet2meter = 3.281
const gallon2liter = 0.264
const pound2kilogram = 2.204

const inputEl = document.getElementById("input")
const convertBtn = document.getElementById("convert-btn")
const lengthConvEl = document.getElementById("length-conv")
const volumeConvEl = document.getElementById("volume-conv")
const massConvEl = document.getElementById("mass-conv")

convertBtn.addEventListener("click", () => {
  const value = inputEl.value

  const feets = value * feet2meter
  const meters = value / feet2meter
  lengthConvEl.innerHTML = 
    `${value} meters = ${feets.toFixed(3)} feet | ${value} feet = ${meters.toFixed(3)} meters`

  const gallons = value * gallon2liter
  const liters = value / gallon2liter
  volumeConvEl.innerHTML = 
    `${value} liters = ${gallons.toFixed(3)} gallons | ${value} gallons = ${liters.toFixed(3)} liters`

  const pounds = value * pound2kilogram
  const kilos = value / pound2kilogram
  massConvEl.innerHTML = 
   `${value} kilos = ${pounds.toFixed(3)} pounds | ${value} pounds = ${kilos.toFixed(3)} kilos`
  console.log(inputEl.value)
})