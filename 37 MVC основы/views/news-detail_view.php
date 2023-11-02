<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?=$newsItem['title']?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="container">
    <a href="news.php">Новости</a>
    <a href="authors.php">Авторы</a>
    <a href="/">На главную</a>

    <div class="news-item">
        <div class="news-info">
            <h1><?=$newsItem['title']?></h1>
            <img src="<?=$newsItem['image']?>" alt="<?=$newsItem['title']?>">
            <p class="main-text"><?=$newsItem['text']?></p>
            <p>Дата публикации: <?=$newsItem['add_date']?></p>
            <p>Категория: <span class="<?=$newsItem['class_name']?>"><?=$newsItem['category']?></span></p>
        </div>
        <div class="author-info">
            <img src="<?=$newsItem['avatar']?>" alt="<?=$newsItem['first_name'].' '.$newsItem['last_name']?>">
            <h3>
                <a href="author-detail.php?authorId=<?=$newsItem['authorId']?>">
                    <?=$newsItem['first_name'].' '.$newsItem['last_name']?>
                </a>
            </h3>
            <p><?=$newsItem['short_info']?></p>
        </div>
    </div>
</div>
</body>
</html>