<?php
// контроллер страницы просмотра одной новости

// подключаем модель для работы в таблицей с новостями
require 'models/News.php';

$newsId = (int)$_GET['newsId'];// получаем ID новости

$newsItem = News::getNewsItemById($newsId);


// заменяем символы \r\n\r\n на переносы
$newsItem['text'] = str_replace("\r\n", '</p><p class="main-text">', $newsItem['text']);
// удаляем пустые параграфы
$newsItem['text'] = str_replace('<p class="main-text"></p>', '', $newsItem['text']);
//DBConnect::debug($newsItem);

require 'views/news-detail_view.php';