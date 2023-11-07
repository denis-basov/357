<?php
// модель для работы с комментариями

require_once 'DBConnect.php';

class Comments
{
    /**
     * получение комментариев к новости по ее ID
     */
    public static function getCommentsByNewsId($id){
        $pdo = DBConnect::getConnection();

        $query = "SELECT comment, comments.add_date,
                  first_name, last_name, image
                  FROM comments, users
                  WHERE user_id = users.id
                    AND news_id = ?
                    AND approved = 1;";
        $statement = $pdo->prepare($query);
        $statement->execute([$id]);
        return $statement->fetchAll();
    }
}