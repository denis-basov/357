<?php
// контроллер страницы сброса пароля

$title = 'Восстановление пароля';
require 'models/Users.php';

if($_SERVER['REQUEST_METHOD'] === 'POST'){
    // получаем емейл
    $email = htmlspecialchars(trim($_POST['email']));

    // проверяем почту на наличие в БД
    $row = Users::checkEmailUnique($email);

    // если в переменной 0, значит такого емейла в БД нет
    if($row === 0){
        $emailError = 'Указанный адрес не зарегистрирован';
        require 'views/reset-password_view.php';
    }else{
        // отправляем пароль на почту
    }

}else{
    require 'views/reset-password_view.php';
}


