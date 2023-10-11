// получаем контейнер для вставки
let countriesContainer = document.querySelector("#countries");

// формирование разметки и вывод в документ
let showCountry = function (country) {
  console.log(country);

  // формируем строку из объекта
  let countryStr = `
            <div class="country">
                <div class="country-images">
                    <img src="${country.flags.svg}" alt="${country.flags.alt}">
                    <img src="${country.coatOfArms.svg ?? "default.svg"}" alt="Герб страны ${country.translations.rus.common}">
                </div>
                <h2>${country.translations.rus.common}</h2>
                <p>Площадь: ${country.area} кв/км</p>
                <p>Население: ${country.population} чел</p>
                <p>Столица: ${country.capital[0]}</p>
                <p>Граничащие страны: ${country.borders ? country.borders.join(", ") : "Граничащих стран нет"}</p>
            </div>`;

  // добавляю в документ
  countriesContainer.insertAdjacentHTML("beforeend", countryStr);
};

// получение данных о стране
let getCountry = async function (country) {
  let response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
  let data = await response.json();

  showCountry(data[0]);
};
getCountry("russia");
getCountry("peru");
getCountry("australia");
