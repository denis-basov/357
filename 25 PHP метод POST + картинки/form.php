<?php

echo '<pre>$_POST ';
print_r($_POST);
echo '</pre>';

echo '<pre>$_FILES ';
print_r($_FILES);
echo '</pre>';



// получаем данные из массива $_POST
$firstName = htmlspecialchars(trim($_POST['firstName']));
$birthDate = htmlspecialchars(trim($_POST['birthDate']));
$login = htmlspecialchars(trim($_POST['login']));
$email = htmlspecialchars(trim($_POST['email']));
$password = htmlspecialchars(trim($_POST['password']));

// кладем картинку в переменную
$avatar = $_FILES['avatar'];

// получаем путь к картинке
$avatarPath = 'images/'.$avatar['size'].'_'.time().'_'.$avatar['name'];

// перемещаем картинку из временного хранилища в нужую папку
move_uploaded_file($avatar['tmp_name'], $avatarPath);

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
        <img src="<?=$avatarPath?>" alt="<?=$firstName?>">
        <h2>Добро пожаловать, <span><?=$firstName?></span></h2>
        <p>Дата рождения: <span><?=$birthDate?></span></p>
        <p>Логин: <span><?=$login?></span></p>
        <p>Емейл: <span><?=$email?></span></p>
        <p>Пароль: <span><?=$password?></span></p>
    </div>
</body>
</html>