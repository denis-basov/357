<?php
// файл для выхода из учетки
session_start();

session_unset();
header('Location: /');