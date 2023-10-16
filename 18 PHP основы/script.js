let userEl = document.querySelector('.user');
userEl.insertAdjacentHTML('beforeend', '<p>Hello from JS</p>');


let userElLastPar = userEl.children[3]; // получаем последний параграф
userElLastPar.textContent = 'Страна проживания: Атлантида'; // заменяем значение сформированного через php параграфа