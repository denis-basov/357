<?php

$title = 'Вход';

// http://localhost/form.php ? login=ivan12332 & password=6465431858
print_r($_POST);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title;?></title>
</head>
<body>
    <h2><?php echo $title;?></h2>
    <form method="POST">
        <label>Логин</label>
        <input type="text" name="login"><br>

        <label>Пароль</label>
        <input type="password" name="password"><br>

        <input type="submit" value="Войти">
    </form>
</body>
</html>
