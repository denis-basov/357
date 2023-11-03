<?php
    require 'components/header.php';
?>
<!-- Header Section End -->

<!-- Breadcrumb Begin -->
<div class="breadcrumb-option">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="breadcrumb__links">
                    <a href="index.php"><i class="fa fa-home"></i> Home</a>
                    <span>Blog</span>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb End -->

<!-- Blog Section Begin -->
<section class="blog spad">
    <div class="container">
        <div class="row">
            <?php foreach ($newsList as $newsItem):?>
                <div class="col-lg-3 col-md-6 col-sm-10">
                    <div class="blog__item">
                        <div class="blog__item__pic set-bg" data-setbg="<?=$newsItem['image']?>"></div>
                        <div class="blog__item__text">
                            <h6><a href="blog-details.php?newsId=<?=$newsItem['newsId']?>"><?=$newsItem['title']?></a></h6>
                            <ul>
                                <li><span><?=$newsItem['first_name'].' '.$newsItem['last_name']?></span></li>
                                <li><?=substr($newsItem['add_date'], 0, 10)  ?></li>
                            </ul>
                        </div>
                    </div>
                </div>
            <?php endforeach;?>
        </div>
    </div>
</section>
<!-- Blog Section End -->

<!-- Instagram Begin -->
<?php
require 'components/instagram.php';
?>
<!-- Instagram End -->

<!-- Footer Section Begin -->
<?php
require 'components/footer.php';
?>