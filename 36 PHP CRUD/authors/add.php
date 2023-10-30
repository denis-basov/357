<?php
// файл для добавления новых авторов в таблицу authors

    session_start(); // стартуем сессию
    // если пользователь НЕ авторизован
    if( !isset($_SESSION['admin']) ){
        // перенаправляем на главную
        header('Location: /');
        die();
    }


    if($_SERVER['REQUEST_METHOD'] === 'POST'){ // если отправлена форма
        // подключение к БД
        require '../DBConnect.php';
        $pdo = DBConnect::getConnection();

        DBConnect::debug($_POST);
        DBConnect::debug($_FILES);

        // получаем аватар
        $avatar = $_FILES['avatar'];

        // проверяем на пустые поля
        if(!empty($_POST['firstName'])){
            // если НЕ пусто, продолжаем
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
    <title>Добавление нового автора в таблицу authors</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h1>Добавление нового автора в таблицу authors</h1>
    <a href="../admin.php">В панель администратора</a>

    <form method="POST" class="add-author" enctype="multipart/form-data">
        <!-- имя, фамилия, справка, биография, аватар  -->

        <div class="input-data">
            <label>Имя:</label>
            <input type="text" name="firstName">
        </div>

        <div class="input-data">
            <label>Фамилия:</label>
            <input type="text" name="lastName">
        </div>

        <div class="input-data">
            <label>Короткое описание:</label><br>
            <textarea class="short-info" name="shortInfo"></textarea>
        </div>

        <div class="input-data">
            <label>Биография:</label><br>
            <textarea class="biography" name="biography"></textarea>
        </div>

        <div class="input-data">
            <label>Аватар:</label>
            <input type="file" name="avatar">
        </div>

        <div class="input-data">
            <input type="submit" value="Добавить">
        </div>

    </form>
</body>
</html>
