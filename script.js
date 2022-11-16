//FUTURE WORK:
//Toggle "symbols" and "numbers" on/off
//add password entropy percentage

//DOM Elements
const passwordEl1 = document.querySelector("#password-el1")
const passwordEl2 = document.querySelector("#password-el2")
const lengthEl = document.querySelector("#slider")
const uppercaseEl = document.querySelector("#uppercase")
const lowercaseEl = document.querySelector("#lowercase")
const numberEl = document.querySelector("#numbers")
const symbolEl = document.querySelector("#symbols")


const randomFunction = {
  lowercase:randomLower,
  uppercase:randomUpper,
  number:randomNumber,
  symbol:randomSymbol
}

//CHECK PASSWORD LENGTH 
let passwordLength = document.querySelector("#length-title")

lengthEl.addEventListener('mouseup', function () {
  if (lengthEl.value > 0 && lengthEl.value < 3) {
    passwordLength.textContent = "Password Length: " + lengthEl.value
  }else {
    passwordLength.textContent = "Password Length: " + lengthEl.value
  }
})


//Generate password
function generatePasswords() {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numberEl.checked
  const hasSymbol = symbolEl.checked
  passwordEl1.textContent = createPassword1(
    length,
    hasLower,
    hasUpper,
    hasNumber,
    hasSymbol,
    )
}

//Generate PASSWORD1 FUNCTION
function createPassword1(length,lowercase,uppercase,number,symbol) {
  //1.Initialise password variable
  let generatedPassword1 = ""
  const typesCount = lowercase + uppercase + number + symbol
  //2. Filter out unchecked types
  const typesArr = [{lowercase},{uppercase},{number},{symbol}].filter( item => Object.values(item)[0] )

  //if none checked then don't proceed with generating password
  if(typesCount === 0) {
    return ''
  }
  //3. Loop over length Call generator function for each type
  for (let i = 0;i < length; i+= typesCount) {
    typesArr.forEach(type => {
      //get key - lower upper number or symbol
      const funcName = Object.keys(type)[0]
      generatedPassword1 += randomFunction[funcName]()
    })
   //4. Add final password to password var and return
   const finalPassword1 = generatedPassword1.slice(0,length)
   return finalPassword1
  }
}

//Generating random character functions - https://www.net-comber.com/charset.html

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.`~'
  return symbols[Math.floor(Math.random() * symbols.length)]
}


//COPY PASSWORD TEXT FUNCTION

function copyPasswordEl1() {
  const cb = navigator.clipboard;
  const copiedPassword = document.querySelector('#password-el1');
  cb.writeText(copiedPassword.innerText).then(() => alert('Password Option 1 copied'));
}

function copyPasswordEl2() {
  const cb = navigator.clipboard;
  const copiedPassword = document.querySelector('#password-el2');
  cb.writeText(copiedPassword.innerText).then(() => alert('Password Option 2 copied'));
}
