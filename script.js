//FUTURE WORK:
//Toggle "symbols" and "numbers" on/off
//add password entropy percentage


// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]

const character = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  symbol: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
}

const getCharacter = [
  function getupperCase() {
    return character.upperCase[Math.floor(Math.random() * character.upperCase.length)];
  },
  function getlowerCase() {
    return character.lowerCase[Math.floor(Math.random() * character.lowerCase.length)];
  },
  function getNumber() {
    return character.number[Math.floor(Math.random() * character.number.length)];
  },
  function getSymbol() {
    return character.symbol[Math.floor(Math.random() * character.symbol.length)];
  }
]


// check if any of these characters are checked by user
function createPassword1() {
  const uppercaseLetter = document.querySelector("#uppercase").checked
  const lowercaseLetter = document.querySelector("#lowercase").checked
  const number = document.querySelector("#numbers").checked
  const symbol = document.querySelector("#symbols").checked

  if (uppercaseLetter + lowercaseLetter + number + symbol === 0) {
    alert("Please check atleast one box!");
    return;
  }

  let password1 = ""

  while (slider.value > password1.length) {
    let characterAdd = getCharacter[Math.floor(Math.random() * getCharacter.length)]
    let isChecked = document.querySelector(characterAdd.name).checked

    if (isChecked) {
      password1 += characterAdd()
    }
  }
  passwordEl1.textContent = password1
}


let passwordEl1 = document.querySelector("#password-el1")

//CHECK PASSWORD LENGTH 

let passwordLength = document.querySelector("#length-title")
let range = document.querySelector('#slider')

range.addEventListener('mouseup', function () {
  if (this.value > 0 && this.value < 5) {
    passwordLength.textContent = "Password Length: " + slider.value
  }else {
    passwordLength.textContent = "Password Length: " + slider.value
  }
})

// GENERATE PASSWORD ON CLICK

function generatePasswords() {
  clearPassword()
  createPassword1()
}


function clearPassword() {
  passwordEl1.textContent = ""
}

//COPY PASSWORD TEXT FUNCTION

function copyPasswordEl1() {
  const cb = navigator.clipboard;
  const copiedPassword = document.querySelector('#password-el1');
  cb.writeText(copiedPassword.innerText).then(() => alert('Password Option 1 copied'));
}



//CHECKBOX function
