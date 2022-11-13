//FUTURE WORK:
//Toggle "symbols" and "numbers" on/off
//add password entropy percentage


const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

let passwordEl1 = document.querySelector("#password-el1")
let passwordEl2 = document.querySelector("#password-el2")

let psContainer1 = []
let psContainer2 = []

let passwordLength = document.querySelector("#length-title")
let range = document.querySelector('#slider')

range.addEventListener('mouseup', function () {
  if (this.value > 0 && this.value < 5) {
    passwordLength.textContent = "Password Length: " + slider.value
  }else {
    passwordLength.textContent = "Password Length: " + slider.value
  }
})

function generatePasswords() {
  clearPassword()
  generatePassword1()
  generatePassword2()
}

function generatePassword1() {


  for (let i = 0;i < slider.value; i++) {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    psContainer1.push(characters[randomCharacter])
  }
  
  for (let i = 0;i <psContainer1.length;i++) {
    passwordEl1.textContent += psContainer1[i]
  }
  
}

function generatePassword2() {

let range = document.getElementsByTagName('slider');
  for (let i = 0;i < slider.value; i++) {
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

//SETTING PASSWORD LENGTH
// const sliderProps = {
// 	fill: "#6D28D9",
// 	background: "#fff",
// };
// // Selecting the Range Slider container which will effect the LENGTH property of the password.
// const slider = document.querySelector(".slider-container");

// // Text which will show the value of the range slider.
// const sliderValue = document.querySelector("#length__title");

// // Using Event Listener to apply the fill and also change the value of the text.
// slider.querySelector("input").addEventListener("input", event => {
// 	sliderValue.setAttribute("data-length", event.target.value);
// 	applyFill(event.target);
// });
// // Selecting the range input and passing it in the applyFill func.
// applyFill(slider.querySelector("input"));

// // This function is responsible to create the trailing color and setting the fill.
// function applyFill(slider) {
// 	const percentage = (100 * (slider.value - slider.min)) / (slider.max - slider.min);
// 	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${sliderProps.background} ${percentage +
// 			0.1}%)`;
// 	slider.style.background = bg;
// 	sliderValue.setAttribute("data-length", slider.value);
// }
