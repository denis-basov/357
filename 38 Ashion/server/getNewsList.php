<?php
// файл для получения списка новостей из БД и ответа клиенту

// получаем данные для выборки новостей
$start = (int)$_GET['start'];
$limit = (int)$_GET['limit'];

// подключаем модель для работы с новостями
require '../models/News.php';

$newsList = News::getMoreNews($start, $limit);

$newsListJSON = json_encode($newsList); // кодируем в строку JSON

echo $newsListJSON;