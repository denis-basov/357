<?php
$user = [
    'f_name' => 'Марфа',
    's_name' => 'Петровна',
    'l_name' => 'Кузнецова',
    'city' => "Воронеж",
    'country' => "Россия",
    'population' => "1,05 млн человек"
];
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Кабинет пользователя</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h2>Кабинет пользователя</h2>
    <div class="user">
        <h3>Добро пожаловать, <?= $user['f_name'].' '.$user['l_name'].' '.$user['s_name'];?></h3>
<!--        <h3>Добро пожаловать, --><?//= $user['f_name'];?><!-- --><?//=$user['l_name'];?><!-- --><?//=$user['s_name'];?><!--</h3>-->
<!--        <h3>Добро пожаловать, --><?//= "{$user['f_name']} {$user['l_name']} {$user['s_name']}";?><!--</h3>-->
<!--        <h3>Добро пожаловать, --><?//= "$user[f_name] $user[l_name] $user[s_name]";?><!--</h3>-->
       <p>Город проживания: <?= $user['city'];?></p>
       <p>Население в городе: <?= $user['population'];?></p>
       <p>Страна проживания: <?= $user['country'];?></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
