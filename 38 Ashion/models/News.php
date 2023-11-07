<?php
// модель для новостей

require_once 'DBConnect.php';

class News
{

    /**
     * метод для получения ограниченного по кол-ву списка новостей
     */
    public static function getLimitNewsList($limit){
        $pdo = DBConnect::getConnection();

        $limit = (int)$limit;

        $query = "SELECT news.id AS newsId, title, add_date, image,
                    first_name, last_name
                    FROM news, authors
                    WHERE author_id = authors.id
                    ORDER BY RAND()
                    LIMIT $limit;";
        return $pdo->query($query)->fetchAll();
    }

    /**
     * метод для получения всех новостей
     */
    public static function getNewsList(){
        $pdo = DBConnect::getConnection();

        $query = "SELECT news.id AS newsId, title, add_date, image,
                    first_name, last_name
                    FROM news, authors
                    WHERE author_id = authors.id
                    ORDER BY add_date DESC;";
        return $pdo->query($query)->fetchAll();
    }

    /**
     * метод для получения новостей для загрузки и подгрузки через JS
     */
    public static function getMoreNews($start, $limit){
        $pdo = DBConnect::getConnection();

        $query = "SELECT news.id AS newsId, title, add_date, image,
                    first_name, last_name
                    FROM news, authors
                    WHERE author_id = authors.id
                    ORDER BY add_date DESC
                    LIMIT $limit OFFSET $start;";
        return $pdo->query($query)->fetchAll();
    }


    /**
     * метод для получения одной новости по ID
     */
    public static function getNewsItemById($id){
        $pdo = DBConnect::getConnection();

        $query = "SELECT news.title AS newsTitle, text, add_date, image,
                    translation AS categoryTitle, class_name,
                    first_name, last_name
                    FROM news, category, authors
                    WHERE author_id = authors.id
                    AND category_id = category.id
                    AND news.id = ?;";

        $statement = $pdo->prepare($query);
        $statement->execute([$id]);
        return $statement->fetch();
    }
}