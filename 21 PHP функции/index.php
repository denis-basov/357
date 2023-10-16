<?php
// функции

require 'arrays.php';

//function sayHello(){
//    echo '<h2>Hello</h2>';
//}
//sayHello();

//function sayHello($login){
//    echo "<h2>Hello, $login</h2>";
//}
//sayHello('Ivan222');

//function sayHello($login, $pass){
//    echo "<h2>Hello, $login, your password: $pass.</h2>";
//}
//sayHello('Ivan222', '1234');

// 1 задание
// напишите функцию, котрая принимает 2 числа, возводит первое число в степень второго
// и возвращает получившееся значение
// function calc(4,3) // 4 в степени 3

//1
//function myFunc($num1, $num2){
//    echo $num1 ** $num2;
//}
//myFunc(2, 3);

//2
//function culc($num1, $num2){
//    echo $num1 ** $num2;
//}
//culc(4, 3);

//3
//function calc($base, $exponent) {
//    return pow($base, $exponent);
//}
//
//$result = calc(4, 3);
//echo $result;
// сделал через аргументы

// параметр по умолчанию
//function sayHello($login = 'User'){
//    echo "<h2>Hello, $login</h2>";
//}
//sayHello();

// return
//function getSum($num1, $num2){
//    $result = $num1 + $num2;
//    echo "<h2>Сумма: $result</h2>";
//    return $result;
//}
//
//$sum = getSum(23, 64);
//echo "<h1>Сумма: $sum</h1>";

//function getSum($num1, $num2){
//    $result = $num1 + $num2;
//    return $result;
//}
//echo $result;

//$num1 = 44;
//$num2 = 22;
//function getSum(){
//    $result = $GLOBALS['num1'] + $GLOBALS['num2'];
//    return $result;
//}
//echo getSum();
//print_r($GLOBALS);

//print_r($_SERVER);

//function debug($value){
//    echo '<pre>';
//    print_r($value);
//    echo '</pre>';
//}
//debug($_SERVER);
//debug($users);