define(["jquery", "jquery-cookie"], function ($) {
    
    $.ajax({

        url: "data/goods.json",
        success: function (response) {

            for (var index = 0; index < response.length; index++) {
                $(`<li class=""><span>${response[index].name}</span></li>`).appendTo('.hotsales-header');
                $(`<div id="hotsale-list-${index}" class="hotsale-list">
                <div class="info"><ul class="nav-brands h-ul"></ul></div>
                <div class="hotsale-prods"><div class="swiper-container"></div></div>
                </div>`).appendTo(".hotsales-body");

                for (var index2 = 0; index2 < response[index].lists.length; index2++) {
                    $(`<li class="ahs-track-click" data-catgid="${index}" data-bid="${index2}">
                    <span><i><img src="${response[0].lists[index2].img}" alt=""></i></span>
                </li>`).appendTo($(`#hotsale-list-${index} .info ul`));
                }
            }

            $(".info ul.nav-brands li:nth-child(1)").addClass('active');
            $(".nav-brands li").on("click", function () {

                $(this).addClass('active').siblings('li').removeClass('active');
                var catgid = $(this).attr('data-catgid')
                var bid = $(this).attr('data-bid')

                $.ajax({
                    url: "data/goods.json",
                    success: function (response) { 
                        
                        $(` #hotsale-list-${catgid} .hotsale-prods .swiper-container`)
                            .html(`<div class="swiper-wrapper" style ="width: 2380px; height: 550px; transform: translate3d(0px, 0px, 0px); transition-duration: 0.3s;">
                            <ul class="swiper-slide swiper-slide-visible swiper-slide-active" style="width: 1190px; height: 550px;"></ul></div>
                                    <div class="swiper-buttons">
                                    <div class="swiper-button-prev swiper-button"></div>
                                    <div class="swiper-button-next swiper-button"></div> 
                                </div>`);

                        for (let index = 0; index < response[catgid].lists[bid].list.length; index++) {
                            var dex = parseInt(index/10+1)
                           console.log(1)
                            if (index % 10 === 0) { 
                                $(`<ul class="swiper-slide swiper-slide-visible swiper-slide-active" style="width: 1190px; height: 550px;"></ul>`).appendTo(`#hotsale-list-${catgid} .hotsale-prods .swiper-container .swiper-wrapper`);
                            }
                            $(`<li><a href="inquiry.html?id=${response[catgid].lists[bid].list[index].id}" target="_blank">
                                    <div class="img-box"><img src="${response[catgid].lists[bid].list[index].img}"></div>
                                    <span class="name">${response[catgid].lists[bid].list[index].name}</span>
                                    <span>回收最高价 <i class="">￥${response[catgid].lists[bid].list[index].price}</i></span>                        
                                </a></li>`).appendTo(` #hotsale-list-${catgid} .hotsale-prods .swiper-container .swiper-wrapper ul:nth-child(${dex})`)
                        }

                        $('.swiper-button-prev').on('click', function () {
                            $(this).parent().siblings('.swiper-wrapper').css({
                                "transform": "translate3d("+0+"px, 0px, 0px)",
                                 "transition-duration": "300ms"
                                        })
                           
                        });
                        $('.swiper-button-next').on('click', function () {
                            $(this).parent().siblings('.swiper-wrapper').css({
                                "transform": "translate3d("+-1190+"px, 0px, 0px)",
                                 "transition-duration": "300ms"
                                        })
                          
                        });

                    }
                });
                

            });


            $('.hotsales-header li').on('click', 'span', function (event) {
                var target = $(event.target)
                target.parent().addClass('active').siblings('li').removeClass('active');
                var index = $(".hotsales-header span").index(this);
                $(".hotsale-list").removeClass('show').eq(index).addClass('show');
            });
           $('.hotsales-header li:nth-child(1) span').click();
            $(`.nav-brands li:nth-child(1)`).click();

            

        }
    });








});