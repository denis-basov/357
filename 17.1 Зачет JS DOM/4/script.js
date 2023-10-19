let firstName = document.querySelector("#fname");
let firstNameError = document.querySelector("#fname");


firstName.addEventListener("blur", function () {
    if (firstName.value.length < 3) {
      firstNameError.placeholder = "Имя должно содержать не меньше трёх знаков!";
      firstNameError.placeholder.fontColor = "red"
      firstName.style.background = "rgb(250, 150, 150)";
    } else {
      firstName.style.background = "rgb(203, 249, 194)";
    }
  });

let lastName = document.querySelector("#lname");
let lastNameError = document.querySelector("#lname");


lastName.addEventListener("blur", function () {
    if (lastName.value.length < 3) {
      lastNameError.placeholder = "Фамилия должна содержать не меньше трёх знаков!";
      lastName.style.background = "rgb(250, 150, 150)";
    } else {
      lastName.style.background = "rgb(203, 249, 194)";
    }
  });


  let eMail = document.querySelector("#email");
  let eMailError = document.querySelector("#email");
  
  console.dir(eMail)

  eMail.addEventListener("blur", function () {
      if (!eMail.value.includes("@",0)) {
        eMailError.placeholder = "Email должнен содержать знак @!";
        eMail.style.background = "rgb(250, 150, 150)";
      } else {
        eMail.style.background = "rgb(203, 249, 194)";
      }
    });
  



let passWord = document.querySelector("#pword");
let passWordError = document.querySelector("#pword");


passWord.addEventListener("blur", function () {
    if (passWord.value.length < 8) {
        passWordError.placeholder = "Пароль должен содержать минимум 8 знаков";
        passWord.style.background = "rgb(250, 150, 150)";
    } else {
        passWord.style.background = "rgb(203, 249, 194)";
    }
  });
