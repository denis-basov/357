<?php
// echo - вывод простого значения в документ (строки, числа)
// var_dump([1,2,3,4,5]); - подробная инфа о значении
// print_r([1,2,3,4,5]); - удобный вывод массива в документ

//    $num1 = 8;
//    echo $num1;


//    $firstName = 'Иван';
//    $lastName = 'Иванов';
//    $age = 22;

// $greet = "<h2>Привет, $firstName $lastName</h2>";
// $greet = "<h2>Привет, $firstName $lastName. Длина строки: " . strlen('hello') . "</h2>";
// echo $greet;

// echo '5' + '5';//10

// 1 задание
// объявите 3 произвольных переменных, сформируйте из значений переменных заголовок 3 уровня
// и выведите в документ

//1
/*
$a = "Hello";
$b = "my age";
$c = 20;

$info = "<h3>" . $a . ", " . $b . ", " . $c . "</h3>";
echo $info;*/

//2
/*
$city = "Воронеж";
$country = "Россия";
$population = "1,05 млн человек";

$cities = "<h3>Есть город $city в стране $country с населением $population</h3>";

echo $cities;*/

//3
/*
$fname = 'Ирина';
$lname = 'Сидорова';
$age = '20';
$user = "<h3>$fname $lname , $age лет</h3>";

echo $user;*/

//4
/*
$f_name = 'Марфа';
$s_name = 'Петровна';
$l_name = 'Кузнецова';
$greet = "<h3>Добро пожаловать, $f_name $s_name $l_name</h3>";
echo $greet;*/

//5
/*
$car1 = 'Ваз';
$car2 = 'Волга';
$car3 = 'Москвич';
$greet = "<div class='cars'>
            <h3>Марки российских автомобилей:</h3>
            <p>$car1, $car2, $car3.</p>
          </div>";
echo $greet;*/

//6
/*
$firstName = 'Маша';
$lastName = 'Петрова';
$age = 30;
$greet = "<h3> Привет, $firstName $lastName.</h3>";
echo $greet;*/

//7
/*
$var1 = "Заголовок 1";
$var2 = "Заголовок 2";
$var3 = "Заголовок 3";

echo "<h1>$var1</h1>
      <h2>$var2</h2>
      <h3>$var3</h3>";*/

//var_dump(3 . 7);

/*
echo strlen('hello');
echo '<hr>';
echo strlen('привет');// 12
echo '<hr>';
echo mb_strlen('привет');// 6
echo '<hr>';
echo strlen('漢字');
echo '<hr>';
echo mb_strlen('漢字');*/

//$numbers = [1,2,3,4,5,6];
//echo $numbers;

//$greet = 'hello';
//echo $greet[1];

//$greet = 'hello';
//$greet[0] = 'H';
//echo $greet;

//$greet = 'Привет';
//echo $greet[0].$greet[1];

//echo '<a href="form.php">Войти</a>';

/**
 * Массивы
 */
$numbers = [5,1,6,8,9,4,3,2,6,7];
$fruits = ["Киви", "Ананас", "Кокос", "Апельсин", "Банан", "Яблоко"];
$pets = ["cat", "dog", "bat", "mouse", "pig", "goat", "sheep", "cow", "chicken"];
$animals = ["ant", "bison", "camel", "duck", "elephant", "cat", "dog"];
//print_r($numbers);
//print_r($numbers[2]);
//print_r(count($numbers));

// добавление элемента в массив
// $animals[] = 'tiger';
// print_r($animals);

// копирование массива
//$fruits2 = $fruits;// копирую массив
//$fruits2[] = 'Арбуз';// добавил в новый массив 1 эдемент
//echo 'Исходный массив';
//print_r($fruits);
//echo 'Новый массив';
//print_r($fruits2);

// новая ссылка на исходный массив
//$fruits2 = &$fruits;// создаем новую ссылку на массив
//$fruits2[] = 'Арбуз';// добавил в новый массив 1 эдемент
//echo 'Исходный массив';
//print_r($fruits);
//echo 'Новый массив';
//print_r($fruits2);

// вывод данных из массива
/*
echo '<div class="pets">';
for($i = 0; $i < count($pets); $i++){
    echo "<p>$pets[$i]</p>";
}
echo '</div>';*/

/**
 * ассоциативные массивы
 */
//$f_name = 'Марфа';
//$s_name = 'Петровна';
//$l_name = 'Кузнецова';
//$city = "Воронеж";
//$country = "Россия";
//$population = "1,05 млн человек";

//let user = {
//    f_name:  'Марфа',
//    s_name: 'Петровна',
//    l_name: 'Кузнецова',
//    hobbies: ['Играть на флейте', 'Кататься на роликах', 'Собирать грибы'],
//    city: "Воронеж",
//    country: "Россия",
//    population: "1,05 млн человек"
//};

// ассоциативный массив
/*
$user = [
    'f_name' => 'Марфа',
    's_name' => 'Петровна',
    'l_name' => 'Кузнецова',
    'city' => "Воронеж",
    'country' => "Россия",
    'population' => "1,05 млн человек"
];
//print_r($user);
echo $user['f_name'] . ' ' . $user['s_name'];*/

/*
$user = [
    'f_name' => 'Марфа',
    's_name' => 'Петровна',
    'l_name' => 'Кузнецова',
    'age' => 22,
    'hobbies' => ['Играть на флейте', 'Кататься на роликах', 'Собирать грибы'],
    'phones' => [
        'home' => '834-54-21',
        'work' => '845-65-45',
        'personal' => '784-55-77'
    ],
    'address' => [
        'city' => ["Воронеж", "Самара"],
        'country' => "Россия",
        'population' => "1,05 млн человек"
    ]
];

echo '<pre>';
print_r($user);
echo '</pre>';

echo $user['hobbies'][1];
echo '<hr>';
echo $user['phones']['work'];
echo '<hr>';
echo $user['address']['city'][1];*/

// двумерные массивы
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
    ]
];
//echo '<pre>';
//print_r($users);
//echo '</pre>';

// 1 задание
// получите строку на основе массива
// '<p>Имя: Иван. Фамилия: Сергеев. Хобби: Играть на флейте и Играть на гитаре</p>'

//1
//echo "<p>Имя: ". $users[0]["fName"] .". Фамилия: ".
//        $users[1]["lName"] .". Хобби: ". $users[2]['hobbies'][0] ."</p>";

//2
// echo '<p>Имя: '. $users[0]['fName'].'. Фамилия: '.$users[1]['lName'].'. Хобби: '. $users[0]['hobbies'][0].', '. $users[2]['hobbies'][0].'.</p>';

//3
/*
$array = [
    'Имя' => 'Иван',
    'Фамилия' => 'Сергеев',
    'Хобби' => 'Играть на флейте и Играть на гитаре'
];

$string = '<p>Имя: ' . $array['Имя'] . '. Фамилия: ' . $array['Фамилия'] . '. Хобби: ' . $array['Хобби'] . '</p>';

echo $string;*/

//4
//echo '<p>Имя: ' . $users[0]['fName'] . '. Фамилия: ' . $users[1]['lName'] . '. Хобби: ' .
//    $users[0]['hobbies'][0] . ' и ' . $users[2]['hobbies'][0] . ' </p>';

//5
//echo "<p>Имя: {$users[0]['fName']}. Фамилия: {$users[1]['lName']}.
//            Хобби: {$users[0]['hobbies'][0]} и {$users[2]['hobbies'][0]}</p>";