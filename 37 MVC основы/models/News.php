<?php
// модель для работы с таблицей новостей

require "DBConnect.php";

class News
{
    /**
     * метод для получения списка новостей
     */
    public static function getNewsList(){

        $pdo = DBConnect::getConnection();

        $query = "SELECT news.id AS newsId, news.title, add_date, image,
                    authors.id AS authorId, first_name, last_name,
                    translation AS category, class_name
                    FROM news, authors, category
                    WHERE author_id = authors.id
                    AND category_id = category.id
                    ORDER BY add_date DESC;";
        return $pdo->query($query)->fetchAll();
    }

    /**
     * метод для получения одной новости по ID
     */
    public static function getNewsItemById($id){
        $pdo = DBConnect::getConnection();

        // запрос на получение ОДНОЙ новости по ее ID
        $query = "SELECT news.title, text, add_date, image,
                  authors.id AS authorId, first_name, last_name, short_info, avatar,
                  translation AS category, class_name
                  FROM news, authors, category
                  WHERE author_id = authors.id
                    AND category_id = category.id
                    AND news.id = ?;";
        $statement = $pdo->prepare($query);// подготавливаем запрос
        $statement->execute([$id]);// выполняем запрос
        return $statement->fetch();
    }
}