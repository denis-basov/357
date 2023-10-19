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
    <!--если форма с данными пользователя отправлена (запрос методом POST)-->
    <?php if($_SERVER['REQUEST_METHOD'] === 'POST'): ?>
        <?php
            // экранируем данные
            $firstName = htmlspecialchars(trim($_POST['firstName']));
            $lastName = htmlspecialchars(trim($_POST['lastName']));

            // сохраняем введенные данные на ПК клиента в файлах cookie
            setcookie('firstName', $firstName, time()+ 60*60);
            setcookie('lastName', $lastName, time()+ 60*60);

            // перенаправляем клиента в лк
            header('Location: cabinet.php');
            exit;
        ?>
    <!--иначе, страничка загружена впервые. просто показываем форму-->
    <?php else: ?>
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
    <?php endif; ?>
</body>
</html>
