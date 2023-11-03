(function () {

    let newsContainer = document.querySelector('.news-container');// контейнер для вывода новостей
    let moreNewsBtn = document.querySelector('#more-news');//кнопка для позгрузки новостей

    // если элементов на странице нет, прерываем выполнение функции
    if(!newsContainer || !moreNewsBtn) return;

    let start = 0;// начальная строка в БД, по которой начинаем получение новостей
    let limit = 4;// кол-во новостей в запросе

    /**
     * функция для формирования HTML из массива объектов
     */
    function showPosts(newsList){

        // формируем из массива объектов массив строк
        let output = newsList.map(function(newsItem){
            return `
                <div class="col-lg-3 col-md-6 col-sm-10">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" style="background-image: url(${newsItem.image})"></div>
                        <div class="blog__item__text">
                            <h6><a href="blog-details.php?newsId=${newsItem.newsId}">${newsItem.title}</a></h6>
                            <ul>
                                <li><span>${newsItem.first_name} ${newsItem.last_name}</span></li>
                                <li>${newsItem.add_date.slice(0, 10)}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
        });
        // получаем из массива строк одну строку
        output = output.join('');

        // выводим строку на страницу
        newsContainer.insertAdjacentHTML('beforeend', output);
    }

    /**
     * функция для получения новостей из БД
     */
    async function getPosts(){
        // отправляем запрос на сервер
        let response = await fetch(`server/getNewsList.php?start=${start}&limit=${limit}`);
        let newsList = await response.json();
        showPosts(newsList);
    }
    getPosts();

    /**
     * подгрузка новостей по клику на кнопке
     */
    moreNewsBtn.addEventListener('click', function(event){
        event.preventDefault();// отменяем переход по ссылке

        start += limit;// делаем отступ на кол-во новостей в запросе

        getPosts();// получаем и отображаем новые посты
    });

})();