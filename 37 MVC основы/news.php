<?php
// контроллер страницы с новостями

// подключаем модель для работы в таблицей с новостями
require 'models/News.php';

// выполняем запрос на получение новостей
$newsList = News::getNewsList();
// DBConnect::debug($newsList);

// подключаем вид (VIEW)
require 'views/news_view.php';