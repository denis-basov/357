<?php
// страница с книгами

// 1 соединение с БД
require 'DBConnect.php';
$pdo = DBConnect::getConnection();

// 2 Запрос к БД на получение данных
$query = "SELECT books.id AS bookId, title, authors.id AS authorId, firstName, lastName
            FROM books, authors
            WHERE author_id = authors.id;";
$statement = $pdo->query($query);

// 3 получаем ВСЕ строки из БД
$books = $statement->fetchAll();
//DBConnect::debug($books);

// 4 отображение данных в документе
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Книги</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Книги</h1>
    <div class="books">
        <?php foreach($books as $book):?>
            <div class="book">
                <h2><?=$book['title']?></h2>
                <p>Автор: <?=$book['firstName'].' '.$book['lastName']?></p>
            </div>
        <?php endforeach;?>
    </div>
    <a href="/">На главную</a>
</body>
</html>
