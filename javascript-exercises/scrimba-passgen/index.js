const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passOneEl = document.getElementById("password1")
let passTwoEl = document.getElementById("password2")
let genPassButton = document.getElementById("genPassButton")
let passLength = 12


genPassButton.addEventListener("click", function()  {
    function getRandomCharacter() {
        let randomCharacter = Math.floor(Math.random()* characters.length)
        return characters[randomCharacter]
    }
    function genPass() {
        let passGenerated = ""
        for (let i=0; i < passLength; i++) {
            passGenerated += getRandomCharacter()
        }
        return passGenerated 
    }
    const genPassOne = genPass()
    const genPassTwo = genPass()
    console.log(genPassOne)
    console.log(genPassTwo)
    passOneEl.textContent = genPassOne
    passTwoEl.textContent = genPassTwo
})

