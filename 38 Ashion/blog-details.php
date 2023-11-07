<?php
// контроллер страницы детального просмотра новости

// получение ID новости
$id = (int)$_GET['newsId'];

require 'models/News.php';
require 'models/Categories.php';
require 'models/Comments.php';

// получаем данные о новости по ID
$newsItem = News::getNewsItemById($id);
//DBConnect::debug($newsItem);

// получение списка категорий
$categories = Categories::getCategoryList();

// получение помментариев к текущей новости
$comments = Comments::getCommentsByNewsId($id);
// DBConnect::debug($comments);

// получаем кол-во комментариев
$commentsCount = count($comments);


$title = $newsItem['newsTitle'];// задаем заголовок страницы

// добавляем в текст параграфы
$newsItem['text'] = str_replace("\r\n", '</p><p>', $newsItem['text']);
$newsItem['text'] = str_replace("<p></p>", '', $newsItem['text']);

// подключаем шаблон
require 'views/blog-details_view.php';


