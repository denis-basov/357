let fName1 = document.querySelector('#fname');
let mName0 = document.querySelector('#mname');
let lName2 = document.querySelector('#lname');
let email3 = document.querySelector('#email');
let pWord4 = document.querySelector('#pword');

let fName1Error = document.querySelector('#fname-error');
let lName2Error = document.querySelector('#lname-error');
let email3Error = document.querySelector('#email-error');
let pWord4Error = document.querySelector('#pword-error');



fName1.addEventListener('blur', function() {
    console.log(fName1.value);
    // Проверяем введённые данные:
    if (fName1.value.length === 0) {
        // window.alert('Имя обязательно.'); 
        // Выводим в span:
        fName1Error.textContent = 'Имя обязательно!';
        fName1.style = 'border: 3px solid hsl(0, 100%, 74%); background: hsl(0, 100%, 89%);';
    }
    else if (fName1.value.length !== 0) {
        fName1Error.textContent = ''; // Убираем выведенную ошибку.
        fName1.style = 'border: 3px solid hsl(154, 59%, 51%); background: hsl(154, 83%, 86%);';
    }
    // let regexp = '/^[а-яА-Я]+$/u'; // Регулярное выражение.
});


mName0.addEventListener('blur', function() {
    console.log(mName0.value);
    if (mName0.value.length !== 0) {
        mName0.style = 'border: 3px solid hsl(154, 59%, 51%); background: hsl(154, 83%, 86%);';
    }
});


lName2.addEventListener('blur', function() {
    console.log(lName2.value);
    if (lName2.value.length === 0) {
        lName2Error.textContent = 'Фамилия обязательна!';
        lName2.style = 'border: 3px solid hsl(0, 100%, 74%); background: hsl(0, 100%, 89%);';
    }
    else if (lName2.value.length !== 0) {
        lName2Error.textContent = '';
        lName2.style = 'border: 3px solid hsl(154, 59%, 51%); background: hsl(154, 83%, 86%);';
    }
});


email3.addEventListener('blur', function() {
    console.log(email3.value);
    if (email3.value.length === 0) {
        email3Error.textContent = 'Введите почту!';
        email3.style = 'border: 3px solid hsl(0, 100%, 74%); background: hsl(0, 100%, 89%);';
    }
    else if (email3.value.length !== 0) {
        email3Error.textContent = '';
        email3.style = 'border: 3px solid hsl(154, 59%, 51%); background: hsl(154, 83%, 86%);';
    }
});


pWord4.addEventListener('blur', function() {
    console.log(pWord4.value.length);
    if (pWord4.value.length === 0) {
        pWord4Error.textContent = 'Введите пароль!';
        pWord4.style = 'border: 3px solid hsl(0, 100%, 74%); background: hsl(0, 100%, 89%);';
    }
    else if (pWord4.value.length !== 0) {
        pWord4Error.textContent = '';
        pWord4.style = 'border: 3px solid hsl(154, 59%, 51%); background: hsl(154, 83%, 86%);';
    }
});






let submit5 = document.querySelector('#submitTotal');
submit5.addEventListener('click', function() {
    console.log(submit5);
});






let inputForm = document.querySelectorAll('.form-big input');
inputForm.forEach(function (input) {
    input.addEventListener('focus', function() {
        input.style = 'border: 3px solid hsl(248, 32%, 49%)'; // Фиолетовая рамка для всех.
    });
});







// const form = document.getElementById("form");
// const firstName = document.getElementById("fname");
// const midName = document.getElementById("mname");
// const lastName = document.getElementById("lname");
// const email = document.getElementById("email");
// const password = document.getElementById("pword");
// const inputs = document.querySelectorAll("submitTotal");

// function submitFunc() {
//   window.alert("Форма заполнена!");
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let fname = firstName.value.trim();
//     let lname = lastName.value.trim();
//     let emailValue = email.value.trim();
//     let passwordValue = password.value.trim();

//     let isValid = true;
//     if (fname === "") {
//         errorFunc(firstName, "Введите имя");
//         isValid = false;
//     } else {
//         successFunc(firstName);
//     }

//     if (lname === "") {
//         errorFunc(lastName, "Введите фамилию");
//         isValid = false;
//     } else {
//         successFunc(lastName);
//     }

//     if (emailValue === "") {
//         errorFunc(email, "Введите адрес электронной почты");
//         isValid = false;
//     } else {
//         successFunc(email);
//     }

//     if (passwordValue === "") {
//         errorFunc(password, "Введите пароль");
//         isValid = false;
//     } else {
//         successFunc(password);
//     }

//     if (isValid) {
//         submitFunc();   
//     }
// });

// inputs.forEach((input) => {
//   input.addEventListener("focus", () => {
//     input.classList.remove("err", "success");
//     const formControl = input.parentElement;
//     const span = formControl.querySelector("span");
//     span.innerText = "";
//   });
// });

// function errorFunc(req) {
//   const formControl = req.parentElement;
//   const span = formControl.querySelector("span");
//   req.classList.add("err");
//   span.classList.add("err-text");
//   req.value = "";
// }

// function successFunc(req) {
//   req.classList.remove("err");
//   req.classList.add("success");
// }