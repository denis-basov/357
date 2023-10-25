// получаем контейнер для вставки новостей
let booksContainer = document.querySelector('#books');
let getBooksBtn = document.querySelector('#get-books');

/**
 * функция для превращения массива объектов в строку
 * и вставки в контейнер
 */
function showBooks(books){
    //console.log(books);

    // 1 превращаем массив бъектов в массив строк
    // let output = books.map(function(book){
    //     return `
    //         <div class="book">
    //             <h2>${book.title}</h2>
    //             <p>Автор: ${book.firstName + ' ' + book.lastName}</p>
    //         </div>
    //     `;
    // });
    // объединяем массив строк в строку
    // output = output.join('');
    // console.log(output);

    // 2 превращаем массив бъектов в массив строк
    let outputReduce = books.reduce(function(accStr, book){
        return accStr + `
            <div class="book">
                <h2>${book.title}</h2>
                <p>Автор: ${book.firstName + ' ' + book.lastName}</p>
            </div>
        `;
    }, '');
    // console.log(outputReduce);

    // вставляем сформированную строку в документ
    booksContainer.insertAdjacentHTML('beforeend', outputReduce);
}

/**
 * функция для получения данных о книгах
 */
async function getBooks(){
    let response = await fetch('server/getBooks.php');
    let books = await response.json();

    showBooks(books);
}
// getBooks();

// при нажатии на кнопку
getBooksBtn.addEventListener('click', function(){
    getBooks();
    getBooksBtn.style.display = 'none';
});