<?php
// подключение к БД

/**
 * для подключения к БД нужно:
 * 1. Название БД - test
 * 2. Адрес сервера БД - localhost
 * 3. Логин пользователя - root
 * 4. Пароль - ''
 */

class DBConnect{
    // статические свойства для подключения к БД
    private static $dbName = 'test';
    private static $dbHost = 'localhost';
    private static $dbLogin = 'root';
    private static $dbPassword = '';

    // метод для получения объекта соединения с БД
    public static function getConnection(){
        // dsn: mysql:dbname=test;host=localhost
        return new PDO('mysql:dbname='.self::$dbName.';host='.self::$dbHost, self::$dbLogin, self::$dbPassword);
    }
}
$pdo = DBConnect::getConnection();
var_dump($pdo);

//$pdo = new PDO('mysql:dbname=test;host=localhost', 'root', '');
//var_dump($pdo );