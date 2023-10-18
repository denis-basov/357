<?php
// C - create
// R - read
// U - update
// D - delete

// страница детального просмотра авто
//print_r($_GET);

$cars = require 'data.php';

// получаем ID авто
$id = (int)$_GET['id'];
//var_dump($id);

// если ID модифицирован пользователем
if($id === 0){
    //die('Идентификатор некорректен');

    // require '404.html';
    // die();

    // перенаправляем клиента на страницу с ошибкой
    header('Location: 404.html');
    exit;
}

// получаем авто по его ID
$car = null; // переменная для авто

foreach ($cars as $value) {// перебираем массив с целью найти авто по ID
    if($value['id'] === $id){// если есть совпадение
        $car = $value; // сохраняем в переменную текущий массив
        break;
    }
}

// если авто не найден
if(!$car){
    // перенаправляем клиента на страницу с ошибкой
    header('Location: 404.html');
    exit;
}

// print_r($car);
?>
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$car['maker'].' '.$car['model']?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="car-item">
        <img src="<?=$car['image']?>" alt="<?=$car['maker'].' '.$car['model']?>">
        <div class="car-info">
            <h2><?=$car['maker'].' '.$car['model']?></h2>
            <p>Год выпуска: <span><?=$car['made_year']?> г.</span></p>
            <p>Максимальная скорость: <span><?=$car['top_speed']?> км/ч.</span></p>
            <p>Разгон до 100 км/ч: <span><?=$car['acceleration_to_100']?> с.</span></p>
            <p>Мощность: <span><?=$car['power']?> л/с.</span></p>
            <p>Масса: <span><?=$car['weight']?> кг.</span></p>
            <a href="index.php">К списку авто</a>
        </div>
    </div>
</body>
</html>
