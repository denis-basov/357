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
    <?php if(isset($_COOKIE['firstName']) && isset($_COOKIE['lastName'])):?>
        <!-- если клиент авторизован (куки установлены) показываем приветствие -->
        <h1>Привет, <?=$_COOKIE['firstName'] .' '. $_COOKIE['lastName']?></h1>
        <a href="shop.php">Магазин</a>
        <a href="exit.php">Выйти</a>
    <?php else:?>
        <h1>Эта страница только для авторизованных пользователей</h1>
        <a href="/">Перейти на главную</a>
    <?php endif;?>
</body>
</html>