<?php
// контроллер главной страницы
$title = 'Главная страница';

require 'models/News.php';

// получаем новости для главной страницы
$newsList = News::gelLimitNewsList();
//DBConnect::debug($newsList);


require 'views/index_view.php';