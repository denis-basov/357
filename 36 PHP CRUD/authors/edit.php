<?php
// файлик для редактирования данных об авторе

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

    // получаем данные об авторах
    $query = 'SELECT id, first_name, last_name
                FROM authors;';
    $statement = $pdo->query($query);
    $authors = $statement->fetchAll();

    // при выборе автора показываем форму для редактирования
    // name="action" value="Редактировать"
    if( isset($_POST['action']) && $_POST['action'] === 'Редактировать' ){
        $authorId = (int)$_POST['authorId'];// получаем ID автора

        // получаем данные о выбранном авторе из БД по ID
        $query = "SELECT * FROM authors WHERE id = ?;";
        $statement = $pdo->prepare($query);
        $statement->execute([$authorId]);
        $author = $statement->fetch();
//        DBConnect::debug($author);
    }


    // если отправлена форма на сохранение изменений
    // name="action" value="Сохранить изменения"
    if ( isset($_POST['action']) && $_POST['action'] === 'Сохранить изменения'){
//        DBConnect::debug($_POST);
//        DBConnect::debug($_FILES);

        // проверяем переданные данные на пустоту
        if( !empty($_POST['firstName'])
            && !empty($_POST['lastName'])
            && !empty($_POST['shortInfo'])
            && !empty($_POST['biography'])
        ){ // если поля не пустые, работаем с данными
            // экранируем данные
            $firstName = htmlspecialchars(trim($_POST['firstName']));
            $lastName = htmlspecialchars(trim($_POST['lastName']));
            $shortInfo = htmlspecialchars(trim($_POST['shortInfo']));
            $biography = htmlspecialchars(trim($_POST['biography']));
            $authorId = (int)$_POST['authorId'];
            $oldAvatarPath = htmlspecialchars(trim($_POST['avatarPath']));

            // получаем картинку
            $avatar = $_FILES['avatar'];

            // проверка на наличие нового аватара
            if(!$avatar['size']){// если размер картинки равен 0, значит не приложена
                // обновляем данные в бд без картинки
                $query = "UPDATE authors
                            SET first_name = ?, last_name = ?, short_info = ?, biography = ?
                            WHERE id = ?;";
                $statement = $pdo->prepare($query);
                $statement->execute([$firstName, $lastName, $shortInfo, $biography, $authorId]);
            }else{ // иначе, картинка новая есть
                // удаляем старую картинку
                if(file_exists("..$oldAvatarPath")){
                    unlink("..$oldAvatarPath");
                }

                // формируем путь к новой картинке
                $avatarPath = '/template/images/authors/'.time().'_'.$avatar['name'];

                // перемещаем новую картинку в нужную папку
                move_uploaded_file($avatar['tmp_name'], "..$avatarPath");

                // записываем данные в БД
                $query = "UPDATE authors
                            SET first_name = ?, last_name = ?, short_info = ?, biography = ?, avatar = ?
                            WHERE id = ?;";
                $statement = $pdo->prepare($query);
                $statement->execute([$firstName, $lastName, $shortInfo, $biography, $avatarPath, $authorId]);
            }
            // перенаправить админа
            header('Location: /authors/show.php');
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
    <title>Редактирование авторов из таблицы authors</title>
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <h1>Редактирование авторов из таблицы authors</h1>
    <a href="../admin.php">В панель администратора</a>

    <!-- форма для выбора автора для редактирования -->
    <form method="POST" class="add-author">
        <div class="input-data">
            <label>Выбери автора для редактирования:</label>
            <select name="authorId">
                <?php foreach ($authors as $value):?>
                    <option value="<?=$value['id']?>"><?=$value['id'].' - '.$value['first_name'].' '.$value['last_name']?></option>
                <?php endforeach;?>
            </select>
        </div>
        <div class="input-data">
            <input type="submit" class="myButton" name="action" value="Редактировать">
        </div>
    </form>

    <div>
        <?=$errorMsg ?? ''?>
    </div>

    <!-- форма для редактирования автора -->
    <form method="POST" class="add-author" enctype="multipart/form-data">
        <!-- имя, фамилия, справка, биография, аватар  -->

        <div class="input-data">
            <label>Имя:</label>
            <input type="text" name="firstName" value="<?=$author['first_name'] ?? ''?>">
        </div>

        <div class="input-data">
            <label>Фамилия:</label>
            <input type="text" name="lastName" value="<?=$author['last_name'] ?? ''?>">
        </div>

        <div class="input-data">
            <label>Короткое описание:</label><br>
            <textarea class="short-info" name="shortInfo">
                <?=$author['short_info'] ?? ''?>
            </textarea>
        </div>

        <div class="input-data">
            <label>Биография:</label><br>
            <textarea class="biography" name="biography">
                <?=$author['biography'] ?? ''?>
            </textarea>
        </div>

        <div class="input-data">
            <label>Аватар:</label>
            <input type="file" name="avatar">
        </div>

        <input type="hidden" name="authorId" value="<?=$author['id'] ?? ''?>">
        <input type="hidden" name="avatarPath" value="<?=$author['avatar'] ?? ''?>">

        <div class="input-data">
            <input type="submit" class="myButton" name="action" value="Сохранить изменения">
        </div>

    </form>


</body>
</html>
