define(["jquery", "jquery-cookie"], function ($) {
    for (var index = 0; index < 5; index++) {

        $(`<ul class="swiper-slide" style="width: 1190px; height: 296px"></ul>`).appendTo('#ahs-share .swiper-wrapper');
    }
    for (var index2 = 0; index2 < 5; index2++) {
        $(`<li><div class="usershare">
            <div class="usershare-info clearfix">
                <div class="img"></div>
                <div class="info-wrap">
                    <div class="share-mobile">138****3582</div>
                    <ul class="share-rate share-rate-5">
                        <li class="rate-1"></li>
                        <li class="rate-2"></li>
                        <li class="rate-3"></li>
                        <li class="rate-4"></li>
                        <li class="rate-5"></li>
                    </ul>
                </div>
            </div>
            <div class="usershare-content-wrap">
                <div class="usershare-content">
                    服务诚信周到，每次都来爱回收，价格公道，服务放心，好评！
                </div>
            </div>
        </div>
        <div class="share-bottom">
            <span class="share-address">
                通过邮寄方式回收了一台                                                    
                <span class="share-name"></span>
            </span>
        </div></li>`).appendTo('#ahs-share .swiper-wrapper>ul')

    }
    $('#ahs-share .swiper-button-prev-share').on('click', function () {
        $("#ahs-share .swiper-wrapper").css({
            "transform": "translate3d("+0+"px, 0px, 0px)",
             "transition-duration": "300ms"
                    })
    });
    $('#ahs-share .swiper-button-next-share').on('click', function () {
        $("#ahs-share .swiper-wrapper").css({
            "transform": "translate3d("+-1190+"px, 0px, 0px)",
             "transition-duration": "300ms"
          })
    });
    



})