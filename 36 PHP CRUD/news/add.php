<?php
// страница для добавления новостей в таблицу news

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

    // получаем авторов для вывода в форме
    $query = "SELECT id, first_name, last_name
                    FROM authors;";
    $statement = $pdo->query($query);
    $authors = $statement->fetchAll();

    // получаем категории для вывода в форме
    $query = "SELECT id, translation AS title
                FROM category;";
    $statement = $pdo->query($query);
    $categories = $statement->fetchAll();

    // если отправлена форма на добавление новости
    if($_SERVER['REQUEST_METHOD'] === 'POST'){
        DBConnect::debug($_POST);
        DBConnect::debug($_FILES);

        // забираем картинку новости
        $image = $_FILES['image'];

        // проверяем на пустые поля
        if(!empty($_POST['title'])
            && !empty($_POST['authorId'])
            && !empty($_POST['categoryId'])
            && !empty($_POST['text'])
            && $image['size']
        ){// если все поля заполнены, работаем с данными
            // экранируем введенные данные
            $title = htmlspecialchars(trim($_POST['title']));
            $authorId = (int)$_POST['authorId'];
            $categoryId = (int)$_POST['categoryId'];
            $text = htmlspecialchars(trim($_POST['text']));

            // формируем путь к картинке, куда будем загружать
            $imagePath = '/template/images/news/'.time().'_'.$image['name'];

            // перемещаем картинку в нужную папку
            move_uploaded_file($image['tmp_name'], "..$imagePath");

            // записываем данные об авторе в БД
            $query = "INSERT INTO news (title, text, image, author_id, category_id)
                        VALUES(?, ?, ?, ?, ?);";
            $statement = $pdo->prepare($query);// подготавливаем
            $statement->execute([$title, $text, $imagePath, $authorId, $categoryId]);

            // перенаправить админа куда-то
            header('Location: /admin.php');
            die();

        }else{
            $errorMsg =  "<h2 class='error-msg'>Заполните все поля</h2>";
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
    <title>Добавление новости в таблицу news</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h1>Добавление новости в таблицу news</h1>
    <a href="../admin.php">В панель администратора</a>

    <form method="POST" class="add-author" enctype="multipart/form-data">

        <div class="input-data">
            <div class="input-data">
                <label>Заголовок новости:</label>
                <input type="text" name="title">
            </div>

            <div class="input-data">
                <label>Выбери автора:</label>
                <select name="authorId">
                    <option value="">Выбери автора</option>
                    <?php foreach ($authors as $author):?>
                        <option value="<?=$author['id']?>"><?=$author['first_name'].' '.$author['last_name']?></option>
                    <?php endforeach;?>
                </select>
            </div>

            <div class="input-data">
                <label>Выбери категорию:</label>
                <select name="categoryId">
                    <option value="">Выбери категорию</option>
                    <?php foreach ($categories as $category):?>
                        <option value="<?=$category['id']?>"><?=$category['title']?></option>
                    <?php endforeach;?>
                </select>
            </div>

            <div class="input-data">
                <label>Фото новости:</label>
                <input type="file" name="image">
            </div>

        </div>

        <div class="input-data">
            <label>Текст новости:</label>
            <textarea class="short-info" name="text"></textarea>
        </div>

        <div class="input-data">
            <input type="submit" value="Добавить новость">
        </div>

    </form>

    <div>
        <?=$errorMsg ?? ''?>
    </div>
</body>
</html>
