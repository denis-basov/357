<?php
// файл для работы с книгами в БД

// 1 подключение к БД, установка соединения
require 'DBConnect.php';
$pdo = DBConnect::getConnection();

// 2 текст запроса
$query = "SELECT books.id AS bookId, title, authors.id AS authorId, firstName, lastName
            FROM books, authors
            WHERE author_id = authors.id;";
// 3 выполение запроса
$statement = $pdo->query($query);

// 4 получаем ВСЕ строки из БД
$books = $statement->fetchAll();

// 5 формируем из массива строку в формате JSON и отдаем в ответ на запрос
echo json_encode($books);