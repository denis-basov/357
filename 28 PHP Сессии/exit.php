<?php
    session_start(); // начинаем сессию

    // удаляем данные сессии
//    unset($_SESSION['firstName']);
//    unset($_SESSION['lastName']);
    session_unset();

    // на главную
    header('Location: /');