<?php
// модель для новостей

require 'DBConnect.php';

class News
{

    /**
     * метод для получения ограниченного по кол-ву списка новостей
     */
    public static function gelLimitNewsList(){
        $pdo = DBConnect::getConnection();

        $query = "SELECT news.id AS newsId, title, add_date, image,
                    first_name, last_name
                    FROM news, authors
                    WHERE author_id = authors.id
                    ORDER BY RAND()
                    LIMIT 4;";
        return $pdo->query($query)->fetchAll();
    }
}