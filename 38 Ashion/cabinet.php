<?php
// контроллер страницы лк клиента


// подключаем модель для работы с табл users
require 'models/Users.php';

// стартуем сессию
session_start();
// получаем ID
$userId = $_SESSION["userId"];

// запрос к БД на получение данных о пользователе
$userInfo = Users::getUserInfoById($userId);

$title = $userInfo['login'];


require 'views/cabinet_view.php';