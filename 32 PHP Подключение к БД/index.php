<?php
// подключение к БД
require 'DBConnect.php';

$pdo = DBConnect::getConnection();
var_dump($pdo);

/**
 * C - create (создать БД, таблицу, добавить данные в таблицу - CREATE, INSERT)
 * R - read (получение данных из таблиц - SELECT)
 * U - update (обновление существующих данных - UPDATE, ALTER)
 * D - delete (удаление БД, таблицы, данных из таблицы - DROP, DELETE)
 *
 */

/**
 * Типы данных
 *
 * Текст:
CHAR: представляет строку фиксированной длины. CHAR(6)
VARCHAR: представляет строку переменной длины.
TINYTEXT: представляет текст длиной до 255 байт.
TEXT: представляет текст длиной до 65 КБ.
MEDIUMTEXT: представляет текст длиной до 16 МБ
LONGTEXT: представляет текст длиной до 4 ГБ
 *
 * Числа:
TINYINT: представляет целые числа от -128 до 127, занимает 1 байт
SMALLINT: представляет целые числа от -32768 до 32767, занимает 2 байтa
MEDIUMINT: представляет целые числа от -8388608 до 8388607, занимает 3 байта
INT: представляет целые числа от -2147483648 до 2147483647, занимает 4 байта
BIGINT: представляет целые числа от -9 223 372 036 854 775 808 до 9 223 372 036 854 775 807, занимает 8 байт
FLOAT: хранит дробные числа с плавающей точкой одинарной точности от -3.4028 * 1038 до 3.4028 * 1038, занимает 4 байта
 *
 * Типы для работы с датой и временем
DATE: хранит даты с 1 января 1000 года до 31 деабря 9999 года (c "1000-01-01" до "9999-12-31").
По умолчанию для хранения используется формат yyyy-mm-dd. Занимает 3 байта.
TIMESTAMP: также хранит дату и время, но в другом диапазоне:
от "1970-01-01 00:00:01" UTC до "2038-01-19 03:14:07" UTC. Занимает 4 байта

 *
 */

/**
 *
    CREATE TABLE authors(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    firstName VARCHAR(255) NOT NULL,
    lastName VARCHAR(255) NOT NULL,
    shartInfo TEXT NOT NULL,
    biography TEXT NOT NULL,
    avatar TEXT DEFAULT 'images/default.jpg',
    birthDate DATE DEFAULT NULL
    );
 */

/**
 *
    CREATE TABLE categories(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    translation VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    cssClass VARCHAR(255) NOT NULL,
    image TEXT NOT NULL
);
 */

/**
 *
    CREATE TABLE news(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL,
    addDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    image TEXT NOT NULL,
    authorId INT NOT NULL,
    categoryId INT NOT NULL,
    FOREIGN KEY(authorId) REFERENCES authors(id),
    FOREIGN KEY(categoryId) REFERENCES categories(id)
    );
 */

/**
 *
    SELECT news.id, news.title, text, add_date, image,
    authors.id, first_name, last_name, avatar,
    category.title, class_name
    FROM news, authors, category
    WHERE author_id = authors.id
    AND category_id = category.id;
 */

/**
 *
    SELECT news.id AS news_id, news.title AS news_title, text, add_date, image,
    authors.id AS author_id, first_name, last_name, avatar,
    category.title AS category_title, class_name
    FROM news, authors, category
    WHERE author_id = authors.id
    AND category_id = category.id
    ORDER BY add_date DESC;
 */