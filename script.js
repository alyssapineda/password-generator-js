//FUTURE WORK:
//Toggle "symbols" and "numbers" on/off
//add password entropy percentage
//inspired from work of Transversy Media on Youtube

//DOM Elements
const passwordEl1 = document.querySelector("#password-el1")
const passwordEl2 = document.querySelector("#password-el2")
let lengthEl = document.querySelector("#slider")
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

    passwordEl2.textContent = createPassword2(
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
  for (let i = 0; i < length; i+= Number(typesCount)) {
    typesArr.forEach(type => {
      //get key - lower upper number or symbol
      let funcName = Object.keys(type)[0]
      generatedPassword1 += randomFunction[funcName]()
    })
  }
   //4. Add final password to password var and return
   const finalPassword1 = shuffle(generatedPassword1).slice(0,length)
  // const finalPassword1 = generatedPassword1.slice(0,length)

  return finalPassword1
}

//Generate PASSWORD1 FUNCTION
function createPassword2(length,lowercase,uppercase,number,symbol) {
  //1.Initialise password variable
  let generatedPassword2 = ""
  const typesCount = lowercase + uppercase + number + symbol
  //2. Filter out unchecked types
  const typesArr = [{lowercase},{uppercase},{number},{symbol}].filter( item => Object.values(item)[0] )

  //if none checked then don't proceed with generating password
  if(typesCount === 0) {
    return ''
  }
  //3. Loop over length Call generator function for each type
  for (let i = 0; i < length; i+= Number(typesCount)) {
    typesArr.forEach(type => {
      //get key - lower upper number or symbol
      let funcName = Object.keys(type)[0]
      generatedPassword2 += randomFunction[funcName]()
    })
  }
   //4. Add final password to password var and return
   const finalPassword2 = shuffle(generatedPassword2).slice(0,length)
  // const finalPassword1 = generatedPassword1.slice(0,length)

  return finalPassword2
}


//SHUFFLE FUNCTION
function shuffle(string) {
  // Convert String to array
  var arr = string.split('');           
  var n = arr.length;              
  
  for(var i=0; i <n-1; ++i) {
    var j = Math.floor(Math.random() * n)      // Get random of [0, n-1]
    
    var temp = arr[i];             // Swap arr[i] and arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  string = arr.join('');                // Convert Array to string
  return string;                        // Return shuffled string
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
