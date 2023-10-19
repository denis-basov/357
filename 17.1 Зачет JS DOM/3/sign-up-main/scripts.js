let fName = document.querySelector("#fname");
let fNameError = document.querySelector("#fname-p");
let lastName = document.querySelector('#lname');
let lastNameError = document.querySelector("#lname-p");
let inEmail = document.querySelector('#email');
let inEmailError = document.querySelector('#email-p');
let password = document.querySelector('#pword');
let passErorr =document.querySelector('#pword-p');
const emailReg = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

fName.addEventListener("blur", function () {
  if (fName.value.length === 0) {
    fNameError.textContent = "Enter first name";
    fName.style.borderColor = 'red';
  } else {
    fNameError.textContent = "";
    fName.style.borderColor = 'green';
  }
});

lastName.addEventListener("blur", function () {
  if (lastName.value.length === 0) {
    lastNameError.textContent = "Enter second name";
    lastName.style.borderColor = 'red';
  } else {
    lastNameError.textContent = "";
    lastName.style.borderColor = 'green';
  }
});

password.addEventListener("blur", function () {
    if (password.value.length === 0) {
      passErorr.textContent = "Enter password";
      password.style.borderColor = 'red';
    } else {
      passErorr.textContent = "";
      password.style.borderColor = 'green';
    }
  });



function onInput() {
  if (isEmailValid(inEmail.value)) {
    inEmail.style.borderColor = 'green';
    inEmailError.textContent = '';
  } else {
    inEmail.style.borderColor = 'red';
    inEmailError.textContent = 'Enter email';
  }
}

inEmail.addEventListener('blur', onInput);

function isEmailValid(value) {
return emailReg.test(value)};