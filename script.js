//EXTRAS:
//set password length - user input?
//Add copy button onclick 
//Toggle "symbols" and "numbers" on/off
//add password entropy percentage



const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordEl1 = document.querySelector("#password-el1")
let passwordEl2 = document.querySelector("#password-el2")

let psContainer1 = []
let psContainer2 = []

function generatePasswords() {
  clearPassword()
  generatePassword1()
  generatePassword2()
}

function generatePassword1() {

  for (let i = 0;i < 15; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    psContainer1.push(characters[randomCharacter])
  }
  
  for (let i = 0;i <psContainer1.length;i++) {
    passwordEl1.textContent += psContainer1[i]
  }
}

function generatePassword2() {

  for (let i = 0;i < 15; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    psContainer2.push(characters[randomCharacter])
  }

  for (let i = 0;i <psContainer2.length;i++) {
    passwordEl2.textContent += psContainer2[i]
  }
}

function clearPassword() {
  passwordEl2.textContent = ""
  passwordEl1.textContent = ""
  psContainer2 = []
  psContainer1 = []
}


