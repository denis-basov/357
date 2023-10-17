<?php
echo '<pre>';
print_r($_GET);
echo '</pre>';

// получаем данные из массива $_GET
$firstName = htmlspecialchars(trim($_GET['firstName']));
$birthDate = htmlspecialchars(trim($_GET['birthDate']));
$login = htmlspecialchars(trim($_GET['login']));
$email = htmlspecialchars(trim($_GET['email']));
$password = htmlspecialchars(trim($_GET['password']));

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
    <div class="user-info">
        <h2>Добро пожаловать, <span><?=$firstName?></span></h2>
        <p>Дата рождения: <span><?=$birthDate?></span></p>
        <p>Логин: <span><?=$login?></span></p>
        <p>Емейл: <span><?=$email?></span></p>
        <p>Пароль: <span><?=$password?></span></p>
    </div>
</body>
</html>







<?php
// http://localhost/form.php
// ?
// firstName=%D0%98%D0%B2%D0%B0%D0%BD
// &
// birthDate=2001-01-02
// &
// login=ivan111
// &
// email=ivan111%40test.ru
// &
// password=ssdefsdfer4t34twgdsfg