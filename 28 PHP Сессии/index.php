<?php
    if($_SERVER['REQUEST_METHOD'] === "POST"){
        $firstName = htmlspecialchars(trim($_POST['firstName']));
        $lastName = htmlspecialchars(trim($_POST['lastName']));

        session_start(); // начинаем сессию
        // записываем данные в сессию
        $_SESSION['firstName'] = $firstName;
        $_SESSION['lastName'] = $lastName;

        // перенаправляем в кабинет
        header('Location: cabinet.php');
        exit;
    }

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Вход</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
        <form method="POST">
            <div>
                <label>Имя:</label>
                <input class="user-input" type="text" name="firstName">
            </div>
            <div>
                <label>Фамилия:</label>
                <input class="user-input" type="text" name="lastName">
            </div>
            <input type="submit" value="Войти">
        </form>
</body>
</html>
