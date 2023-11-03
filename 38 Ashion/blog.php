<?php
// контроллер страницы списка новостей (блога)

$title = 'Блог';
require 'models/News.php';

// получаем все новости из БД
$newsList = News::getNewsList();
//DBConnect::debug($newsList);

require 'views/blog_view.php';
