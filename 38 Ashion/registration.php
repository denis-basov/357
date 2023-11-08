<?php
// контроллер страницы регистрации клиентов

$title = 'Регистрация';
require 'models/Users.php';
require 'core/SignUp.php'; // класс для проверки и сохранения данных

// если отправлена форма регистрации
if($_SERVER['REQUEST_METHOD'] === 'POST'){

    $result = SignUp::validateForm();

    // если ошибки есть
        // показываем форму снова, прописывая в ней данные и тексты ошибок
    // если ошибок нет
        // сохраняем данные
}


require 'views/registration_view.php';