<?php
$title = 'Массивы';

// подключаем файл с массивами
require 'arrays.php';

?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo $title;?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1><?php echo $title;?></h1>

    <div class="users">
        <?php foreach ($users as $i => $user): ?>
            <div class='user user-<?=$i+1?>'>
                <h2>Имя: <?=$user['fName']?></h2>
                <h3>Фамилия: <?=$user['lName']?></h3>
                <p>Увлечения:</p>
                <ul class='hobbies'>
                    <li><?=implode('</li><li>', $user['hobbies'])?></li>
                </ul>
            </div>
        <?php endforeach;?>
    </div>
</body>
</html>
