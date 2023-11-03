<?php
// контроллер главной страницы
$title = 'Главная страница';
$newsCount = 4;

require 'models/News.php';

// получаем новости для главной страницы
$newsList = News::getLimitNewsList($newsCount);
//DBConnect::debug($newsList);


require 'views/index_view.php';