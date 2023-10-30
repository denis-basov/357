<?php
/**
 * C - create (создать БД, таблицу, добавить данные в таблицу - CREATE, INSERT)
 * R - read (получение данных из таблиц - SELECT)
 * U - update (обновление существующих данных - UPDATE, ALTER)
 * D - delete (удаление БД, таблицы, данных из таблицы - DROP, DELETE)
 *
 */


if($_SERVER['REQUEST_METHOD'] === 'POST'){ // если отправлена форма

    require 'DBConnect.php';
    $pdo = DBConnect::getConnection();

    // 1 получаем логин и пароль из массива $_POST
    $inputLogin = trim($_POST['login']);
    $inputPassword = trim($_POST['password']);

    // 2 Делаем запрос к БД по введенному логину и получаем логин и пароль админа
    $query = "SELECT id, login, password
          FROM admins
          WHERE login = ?;";
    $statement = $pdo->prepare($query);
    $statement->execute([$inputLogin]);
    $adminDbData = $statement->fetch();

    // если введен верный логин
    if($adminDbData){
        // проверяем пароль
        if($adminDbData['password'] === $inputPassword){
            session_start(); // стартуем сессию
            $_SESSION['admin'] = true; // добавляем в сессию данные о том, что авторизация прошла

            // перенаправляем админа в зону редактирования данных
            header('Location: admin.php');
            die();
        }
    }

}

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Вход в панель администратора</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Вход в панель администратора</h1>

    <!-- форма для входа админа -->
    <form method="POST" class="enter-admin-form">

        <div class="input-data">
            <label>Логин:</label>
            <input type="text" name="login">
        </div>

        <div class="input-data">
            <label>Пароль:</label>
            <input type="password" name="password">
        </div>

        <div class="input-data">
            <input type="submit" value="Войти">
        </div>

    </form>
</body>
</html>
