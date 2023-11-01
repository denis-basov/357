<?php
    session_start(); // стартуем сессию
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Панель администратора</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- если админ авторизован -->
    <?php if( isset($_SESSION['admin']) ):?>
        <h1>Панель администратора</h1>
        <nav class="authors-nav">
            <a href="authors/show.php">Просмотреть список авторов</a>
            <a href="authors/add.php">Добавить автора</a>
            <a href="authors/delete.php">Удалить автора</a>
            <a href="authors/edit.php">Отредактировать автора</a>
            <a href="exit.php">Выйти</a>
        </nav>

        <nav class="news-nav">
            <a href="news/add.php">Добавить новость</a>
        </nav>
    <?php else:?>
        <?php header('Location: /'); die();?>
    <?php endif;?>
</body>
</html>
