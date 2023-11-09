<?php
// контроллер страницы регистрации клиентов

$title = 'Регистрация';
require 'models/Users.php';
require 'core/SignUp.php'; // класс для проверки и сохранения данных

// если отправлена форма регистрации
if($_SERVER['REQUEST_METHOD'] === 'POST'){

    list($errors, $input) = SignUp::validateForm();

    DBConnect::debug($input);
    DBConnect::debug($errors);

    // если ошибки есть
    if($errors){
        // показываем форму снова, прописывая в ней данные и тексты ошибок
        require 'views/registration_view.php';
    }else{// если ошибок нет
        // сохраняем данные
        SignUp::processForm($input);
    }

}else{
    require 'views/registration_view.php';
}

