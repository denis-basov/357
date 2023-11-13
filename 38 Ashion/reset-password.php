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
        /**
         * генерирование пароля
         */
        // начальная строка из которой будем формировать пароль
        $passwordInit = 'qwertyuiopasdfghjklzxcvbnm0123456789QWERTYUIOPASDFGHJKLZXCVBNM!@#$%^&*';
        // перемешиваем символы в строке
        $password = str_shuffle($passwordInit);
        // получаем первые 6 символов строки
        $password = substr($password, 0, 6);

        
        // отправляем пароль на почту
        $message = "Ваш пароль для доступа на сайт http://f0727777.xsph.ru/: $password";
        mail($email, 'Восстановление пароля', $message);

        // шифруем пароль
        $hash = password_hash($password, PASSWORD_DEFAULT);
        // обновляем пароль в БД
        Users::updatePassword($email, $hash);

        // перезагружаем страницу и показываем сообщение о том, что пароль отправлен
        header('Location: reset-password.php?reset=success');

    }

}else{
    require 'views/reset-password_view.php';
}


