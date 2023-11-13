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

// получение комментариев к текущей новости
$comments = Comments::getCommentsByNewsId($id);
// DBConnect::debug($comments);

// получаем кол-во комментариев
$commentsCount = count($comments);


$title = $newsItem['newsTitle'];// задаем заголовок страницы

// добавляем в текст параграфы
$newsItem['text'] = str_replace("\r\n", '</p><p>', $newsItem['text']);
$newsItem['text'] = str_replace("<p></p>", '', $newsItem['text']);


// получение сылок на соседние посты
$idListDB = News::getIdList();// получаем массив ID из БД
$idList = [];// массив для ID
foreach ($idListDB as $idArr){// перебираем исходный массив
    $idList[] = $idArr['id'];// кладем в новый массив ID каждой новости
}
$key = array_search($id, $idList);// находим ключ  ID текущей новости

$nextNewsId = $idList[$key+1];// id следующей новости
$previousNewsId = $idList[$key-1];// id предыдущей новости

// если это последний элемент массива
if($key === count($idList)-1){
    $nextNewsId = $idList[$key];// присваиваем следующему ID текущий ID
}
// если первый элемент массива
if($key === 0){
    $previousNewsId = $idList[$key];// присваиваем предыдущему ID текущий ID
}

// подключаем шаблон
require 'views/blog-details_view.php';