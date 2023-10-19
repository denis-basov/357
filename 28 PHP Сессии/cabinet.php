<?php
    session_start(); // начинаем сессию
    print_r($_SESSION);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ЛК</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <?php if(isset($_SESSION['firstName']) && isset($_SESSION['lastName'])):?>
        <h1>Привет, <?=$_SESSION['firstName'].' '.$_SESSION['lastName']?></h1>
        <a href="exit.php">Выход</a>
    <?php else:?>
        <h1>Страница доступна только авторизованным пользователям</h1>
        <a href="/">На главную</a>
    <?php endif;?>
</body>
</html>
