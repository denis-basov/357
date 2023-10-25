<?php
// страница с авторами

// подключение к БД
require 'DBConnect.php';

// создаем соединение с бд
$pdo = DBConnect::getConnection();
//var_dump($pdo);

// текст запроса к БД
$query = "SELECT id, firstName, lastName
          FROM authors;";
// выполняем запрос
$statement = $pdo->query($query);
//var_dump($statement);

// получаем построчно данные из результата
//while($row = $statement->fetch()){
//    DBConnect::debug($row);
//}
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Авторы</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Авторы</h1>
    <div class="authors">
        <?php while($row = $statement->fetch()):?>
            <div class="author">
                <p>Имя: <?=$row['firstName']?></p>
                <p>Фамилия: <?=$row['lastName']?></p>
                <p>ID: <?=$row['id']?></p>
            </div>
        <?php endwhile;?>
    </div>
    <a href="books.php">Книги</a>
</body>
</html>

