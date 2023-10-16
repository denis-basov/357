<?php
$title = 'Массивы';

$numbers = [5,1,6,8,9,4,3,2,6,7];
$fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
$pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
$animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];

$user = [
    'f_name' => 'Марфа',
    's_name' => 'Петровна',
    'l_name' => 'Кузнецова',
    'city' => "Воронеж",
    'country' => "Россия",
    'population' => "1,05 млн человек"
];

$users = [
    [
        'fName' => 'Иван',
        'lName' => 'Иванов',
        'hobbies' => ['Играть на флейте', 'Кататься на роликах', 'Собирать грибы']
    ],
    [
        'fName' => 'Владимир',
        'lName' => 'Сергеев',
        'hobbies' => ['Кататься на роликах', 'Собирать грибы', 'Играть на гитаре']
    ],
    [
        'fName' => 'Светлана',
        'lName' => 'Иванова',
        'hobbies' => ['Играть на гитаре', 'Собирать грибы']
    ],
    [
        'fName' => 'Юлия',
        'lName' => 'Сергеева',
        'hobbies' => ['Играть на флейте', 'Кататься на роликах', 'Собирать грибы', 'Играть на гитаре']
    ]
];

//for
//for($i = 1; $i <= 10; $i++){
//    echo "<p>Итерация: $i</p>";
//}
//for($i = 0; $i < 10; $i++){
//    echo "<p>Итерация: ". $i+1 ."</p>";
//}
// перебор массива с пом. for
//for($i = 0; $i < count($fruits); $i++){
//    echo "<p>$fruits[$i]</p>";
//}

// while
//$i = 0;
//while($i < count($pets)){
//    echo "<p>$pets[$i]</p>";
//    $i++;
//}

// foreach
//foreach ($user as $value){
//    echo "<p>$value</p>";
//}
//foreach ($fruits as $fruit){
//    echo "<p>$fruit</p>";
//}
//foreach ($animals as $key => $animal) {
//    echo "<p>Ключ: $key. Значение: $animal</p>";
//}

// 2 задание
// переберите массив $user и выведите каждое его свойство в формате:
// <p><b>f_name :</b> <span>Марфа</span></p>
// <p><b>s_name :</b> <span>Петровна</span></p>

//1
//foreach($user as $key => $value){
//    echo "<p><b>$key:</b> <span>$value</span></p>";
//}

//2
//foreach($user as $key => $my_user){
//    echo "<p><b>$key : </b> <span>$my_user</span></p>";
//}

//3
//foreach($user as $key => $value){
//    echo "<p><b>$key: </b> <span>$value</span></p>";
//}

/*
// вывод данных из двумерного массива
echo '<div class="users">';
foreach ($users as $i => $user){
    $i++;
    echo "<div class='user user-$i'>";
        echo "<h2>Имя: {$user['fName']}</h2>";
        echo "<h3>Фамилия: {$user['lName']}</h3>";
        echo "<p>Увлечения:</p>";
        echo "<ul class='hobbies'>";
//        echo "<li>". implode('</li><li>', $user['hobbies']) ."</li>";
          foreach ($user['hobbies'] as $hobby){
              echo "<li>$hobby</li>";
          }
        echo "</ul>";
    echo "</div>";
}
echo '</div>';
*/

// die();// прерываем выполнение скрипта
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
