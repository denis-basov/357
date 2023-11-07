<?php
// модель для работы с категориями

require_once 'DBConnect.php';

class Categories
{
    /**
     * получение списка категорий
     */
    public static function getCategoryList(){
        $pdo = DBConnect::getConnection();

        $query = "SELECT id, translation, class_name
                    FROM category;";
        return $pdo->query($query)->fetchAll();
    }
}