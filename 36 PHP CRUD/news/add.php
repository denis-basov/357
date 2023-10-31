<?php

// подключение к БД
require '../DBConnect.php';
$pdo = DBConnect::getConnection();

// получаем авторов для вывода в форме
$query = "SELECT id, first_name, last_name
                FROM authors;";
$statement = $pdo->query($query);
$authors = $statement->fetchAll();

DBConnect::debug($_POST);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <form action="" method="POST">

        <div class="input-data">
            <label>Выбери автора:</label>
            <select name="authorId">
                <?php foreach ($authors as $author):?>
                    <option value="<?=$author['id']?>"><?=$author['first_name'].' '.$author['last_name']?></option>
                <?php endforeach;?>
            </select>

            <input type="submit">
        </div>

    </form>
</body>
</html>
