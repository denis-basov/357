let fNameImput = document.querySelector("#fname");
let fNameError = document.querySelector("#fname-p");
let btnSubmit = document.querySelector("#btnSubmit");
function getStatusbtnSubmit() {
  if (fNameStatus && lNameStatus && eMailStatus && passStatus) {
    return btnSubmit.removeAttribute("disabled");
  } else {
    return btnSubmit.setAttribute("disabled", true);
  }
}
let fNameStatus = false;

fNameImput.addEventListener("focus", function () {});
fNameImput.addEventListener("blur", function () {
  if (fNameImput.value.length === 0) {
    fNameError.textContent = "Введите Имя!";
    fNameImput.style.background = "hsl(0, 100%, 74%)";
  } else if (fNameImput.value.length <= 1) {
    fNameError.textContent = "Имя должно содежарть не менee 2 символов!";
    fNameImput.style.background = "hsl(0, 100%, 74%)";
  } else {
    fNameError.textContent = "";
    fNameImput.style.background = "hsl(154, 59%, 51%)";
    fNameStatus = true;
    getStatusbtnSubmit();
  }
});

let lNameImput = document.querySelector("#lname");
let lNameError = document.querySelector("#lname-p");

let lNameStatus = false;

lNameImput.addEventListener("focus", function () {});
lNameImput.addEventListener("blur", function () {
  if (lNameImput.value.length === 0) {
    lNameError.textContent = "Введите Фамилию!";
    lNameImput.style.background = "hsl(0, 100%, 74%)";
  } else if (lNameImput.value.length <= 1) {
    lNameError.textContent = "Фамилия должна содержать не менee 2 символов!";
    lNameImput.style.background = "hsl(0, 100%, 74%)";
  } else {
    lNameError.textContent = "";
    lNameImput.style.background = "hsl(154, 59%, 51%)";
    lNameStatus = true;
    getStatusbtnSubmit();
  }
});

let eMailImput = document.querySelector("#email");
let eMailError = document.querySelector("#email-p");

let eMailStatus = false;

eMailImput.addEventListener("focus", function () {});
eMailImput.addEventListener("blur", function () {
  if (eMailImput.value.length === 0) {
    eMailError.textContent = "Введите адрес электронной почты!";
    eMailImput.style.background = "hsl(0, 100%, 74%)";
  } else if (eMailImput.value.length <= 3) {
    eMailError.textContent =
      "Адрес электронной почты должен содеражть не менее 4 символов";
    eMailImput.style.background = "hsl(0, 100%, 74%)";
  } else if (eMailImput.value.includes("@") === false) {
    eMailError.textContent = "Адрес электронной почты должен содеражть @!";
    eMailImput.style.background = "hsl(0, 100%, 74%)";
  } else {
    eMailError.textContent = "";
    eMailImput.style.background = "hsl(154, 59%, 51%)";
    eMailStatus = true;
    getStatusbtnSubmit();
  }
});

let passImput = document.querySelector("#pword");
let passError = document.querySelector("#pword-p");

let passStatus = false;

passImput.addEventListener("focus", function () {});
passImput.addEventListener("blur", function () {
  if (passImput.value.length === 0) {
    passError.textContent = "Введите Пароль!";
    passImput.style.background = "hsl(0, 100%, 74%)";
  } else if (passImput.value.length <= 7) {
    passError.textContent = "Пароль должен содержать не менee 8 символов!";
    passImput.style.background = "hsl(0, 100%, 74%)";
  } else {
    passError.textContent = "";
    passImput.style.background = "hsl(154, 59%, 51%)";
    passStatus = true;
    getStatusbtnSubmit();
  }
});
