// массивы

//console.log(users);

// обращение по индексам
// console.log(users[3]);
// console.log(users[0]);
// console.log(users[4]);

// let friends = `<h3>Мои друзья: ${users[0]}, ${users[2]}, ${users[4]}.</h3>`;
// document.write(friends);

// получение последнего элемента массива
// console.log(pets);
// let lastIndex = pets.length - 1;
// console.log(pets[lastIndex]);

// 1 задание
// На основе массива fruits получите строку:
// Мои любимые фрукты: Апельсин, Киви, Яблоко.
// и выведите в документ

// 1
// let salad = `<h4>Мой любимый салат состоит из ${fruits[2]}, ${fruits[3]} и ${fruits[fruits.length - 1]}<\h4>`;
// document.write(salad);

//2
// let myfruits = `<p>Мои любимые фрукты: ${fruits[3]}, ${fruits[0]}, ${fruits[5]}.</p>`;
// document.write(myfruits);

//3
// let resultFruitsMe = "Мои любимые фрукты: " + fruits.join(", ") + ".";
// document.write(resultFruitsMe);

//4
// let favFruits = `<h3>Мои любимые фрукты: ${fruits[3]}, ${fruits[0]}, ${fruits[5]}.</h3>`;
// document.write(favFruits);

//5
// let lovly = `<h3>Мои любимые фрукты: ${fruits[3]}, ${fruits[0]}, ${fruits[5]}.</h3>`;
// document.write(lovly);

// изменение знчений в массиве

// fruits[3] = "Арбуз";
// fruits[0] = "Кокос";
// fruits[5] = "Маракуйя";

// fruits[4] = "Киви";
// console.log(fruits);

// let lovly = `<h3>Мои любимые фрукты: ${fruits[3]}, ${fruits[0]}, ${fruits[5]}.</h3>`;
// document.write(lovly);

// вложенные массивы
// console.log(phones);
// console.log(phones[1][2]);
// console.log(phones[2][3]);

/**
 * объекты
 */
// let firstName = "Ivan";
// let lastName = "Ivanov";
// let age = 22;
// let hobby = "reading";
// let isAdmin = false;
// let city = "Moscow";
// let avatar = "image.jpg";

// массив не подходит
// let user = ["Ivan", "Ivanov", 22, "reading", false, "Moscow", "image.jpg"];

// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   age: 22,
//   hobby: "читать",
//   isAdmin: false,
//   city: "Москва",
//   avatar: "image.jpg",
//   children: true,
// };

// console.log(user);
// console.log(user.firstName);
// console.log(user.lastName);
// console.log(user.city);

// let output = `
//     <div class="user">
//         <img src="${user.avatar}" alt="${user.firstName} ${user.lastName}">
//         <h2>Имя: ${user.firstName} Фамилия: ${user.lastName}</h2>
//         <p>Возраст: ${user.age} лет</p>
//         <p>Хобби: ${user.hobby}</p>
//         <p>Город проживания: ${user.city}</p>
//     </div>
// `;
// document.write(output);

// 2 задание
// создайте произвольный объект с несколькими свойствами
// сформируйте на основе свойств объекта строку и выведите в документ

// 1
// let animal = {
//   kind: "snake",
//   age: 23,
//   placeTake: "Brazil",
// };

// let str = `
//     <div class="animal">
//         <h1>Вид: ${animal.kind}</h1>
//         <p>Возраст: ${animal.age}</p>
//         <p>Место прибытия: ${animal.placeTake}</p>
//     </div>
//     `;

// document.write(str);

//2
// let book = {
//   autor: "Pushkin",
//   pages: 198,
//   hero: "Onegin",
// };
// let output = `<p>Любимая книга: автор - ${book.autor}, главный герой - ${book.hero}</p>`;
// document.write(output);

//3
// let device = {
//   device: "Телевизор",
//   type: "Ламповый",
//   colour: "Цветной",
// };

// let output = `
//     <div class="device">
//         <p>Устройство: ${device.device} </p>
//         <p>Тип: ${device.type}</p>
//         <p>Цветность: ${device.colour}</p>
//     </div>`;
// document.write(output);

//4
// let car = {
//   car: "Цвет",
//   age: "33",
//   color: "Зеленый",
//   img: "car.jpd",
//   mark: "2101",
//   lockated: "СПБ",
// };

// let output = `
//     <div class="car">
//         <img scr="${car.img}" alt="${car.color}">
//         <h3> цвет: "${car.color} Марка: ${car.mark}"</h3>
//         <p>возраст ${car.age} лет</p>
//         <p>город нахождения ${car.lockated}</p>
//     </div>`;

// document.write(output);

//5
// let myObject = {
//   name: "Ivan",
//   age: 30,
//   city: "Moscow",
// };
// let objectString = `Имя: ${myObject.name}, Возраст: ${myObject.age}, Город: ${myObject.city}`;

// document.write(objectString);

//6
// let rabbit = {
//   fistName: "Кролян",
//   lastName: "Пушистый",
//   age: 2,
//   gender: "male",
//   avatar: "rabbit.jpg",
// };
// console.log(rabbit);
// console.log(rabbit["avatar"]);
// console.log(rabbit["fistName"]);

// let prop = "avatar";
// console.log(rabbit[prop]); // "rabbit.jpg"

// let output = `
//     <div class="rabbit">
//         <img src="${rabbit.avatar}" alt ="">
//         <h2>Имя: ${rabbit.fistName} Фамилия ${rabbit.lastName}</h2>
//         <p>Возраст:${rabbit.age} </p>
//         <p>Пол: ${rabbit.gender}</p>
//     </div>
//     `;
// document.write(output);

// let cats = 5;
// cats = cats + 2; // 7
// cats += 2; // 9
// cats -= 3; // 6
// cats *= 2; // 12
// cats /= 4; // 3

// cats = cats + 1; // 4
// cats += 1; // 5
// cats++; // 6 - инкремент (увеличение на 1)
// cats--; // 5 - декреент (уменьшение на 1)
// console.log(cats);

// постфиксный инкремент
// let cats = 8;
// console.log(cats++); //8
// console.log(cats);//9

// префиксный инкремент
// let cats = 8;
// console.log(++cats); //9

// let user = {
//   firstName: "Иван",
//   lastName: "Иванов",
//   age: 22,
//   hobby: "читать",
//   isAdmin: false,
//   city: "Москва",
//   avatar: "image.jpg",
//   children: true,
// };

// user.age++;
// user.city = "СПБ";
// user.street = "Пушкина";
// console.log(user);

/*
let user = {
  firstName: "Иван",
  lastName: "Иванов",
  age: 22,
  hobbies: ["читать", "готовить", "гулять", "спать"],
  images: ["image.jpg", "rabbit.jpg"],
  address: {
    city: "Москва",
    street: "Пушкина",
    house: 33,
  },
};

let output = `
    <div class="user">
        <div class="user-info">
            <h2>Имя: ${user.firstName} Фамилия: ${user.lastName}</h2>
            <p>Возраст: ${user.age}</p>
            <h3>Хобби:</h3>
            <ol>
                <li>${user.hobbies[0]}</li>
                <li>${user.hobbies[1]}</li>
                <li>${user.hobbies[2]}</li>
                <li>${user.hobbies[3]}</li>
            </ol>
            <h3>Адрес:</h3>
            <p>Город: ${user.address.city}</p>
            <p>Улица: ${user.address.street}</p>
            <p>Дом: ${user.address.house}</p>
        </div>
        <div class="user-gallery">
            <img src="${user.images[0]}" alt="${user.firstName}" />
            <img src="${user.images[1]}" alt="${user.firstName}" />
        </div>
    </div>
`;
document.write(output);
*/

/*
// массив объектов
let devices = [
  {
    device: "Телевизор",
    type: "Ламповый",
    colour: "Цветной",
  },
  {
    device: "Монитор",
    type: "ЖК",
    colour: "Цветной",
  },
  {
    device: "Часы",
    type: "Механические",
    colour: "Серебристый",
  },
];
console.log(devices);
console.log(devices[2].colour);
console.log(devices[2].type);
console.log(devices[1].type);
*/

// работа с данными другого сервера
// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
