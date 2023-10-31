<?php
// файл для удаления авторов и новостей удаляемых авторов

    session_start(); // стартуем сессию
    // если пользователь НЕ авторизован
    if( !isset($_SESSION['admin']) ){
        // перенаправляем на главную
        header('Location: /');
        die();
    }

    // подключение к БД
    require '../DBConnect.php';
    $pdo = DBConnect::getConnection();

    // получаем данные об авторах для вывода на страницу для удаления
    $query = "SELECT id, first_name, last_name, avatar
                FROM authors;";
    $statement = $pdo->query($query);
    $authors = $statement->fetchAll();

    /**
     * если нажата ссылка на удаление автора
     */
    if(isset($_GET['delete'])){
        // получаем ID автора и ссылку на его аватар
        $authorId = (int)$_GET['delete'];
        $avatarPath = htmlspecialchars('../'.$_GET['avatar']);

        // удаляем аватар автора
        if(file_exists($avatarPath)){// если файл существует
            unlink($avatarPath);// удаляем
        }

        // удаляем новости удаляемого автора
        $query = "DELETE
                    FROM news
                    WHERE author_id = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$authorId]);

        // удаляем самого автора
        $query = "DELETE
                    FROM authors
                    WHERE id = ?";
        $statement = $pdo->prepare($query);
        $statement->execute([$authorId]);

        // перезагружаем страницу
        header('Location: /authors/delete.php');
        die();
    }

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Удаление авторов из таблицы authors</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h1>Удаление авторов из таблицы authors</h1>
    <a href="../admin.php">В панель администратора</a>

    <div class="authors-delete">
        <?php foreach ($authors as $author):?>
            <div class="author">
                <img src="<?=$author['avatar'];?>" alt="<?=$author['first_name'].' '.$author['last_name'];?>">
                <h2><?=$author['first_name'].' '.$author['last_name'];?>. ID: <?=$author['id']?></h2>
                <a href="?delete=<?=$author['id']?>&avatar=<?=$author['avatar'];?>">Удалить</a>
                <!-- http://localhost/authors/delete.php?delete -->
            </div>
        <?php endforeach;?>
    </div>
</body>
</html>
