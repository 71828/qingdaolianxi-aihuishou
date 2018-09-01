define(["jquery", "jquery-cookie"], function ($) {
    $.ajax({
        url: "data/banner.json",
        success: function (response) {
            for (let index = 0; index < response.list.length; index++) {
                $(`<li class="${response.list[index].class}"><dl><dt><a href="">${response.list[index].name}</a></dt></dl></li>`).appendTo($('.category-nav'))
            }
        }
    })
    $.ajax({
        url: "data/banner1.json",
        success: function (response) {
            for (var index = 0; index < response.length; index++) {
                $(`<div class="category-panel"></div>`).appendTo($('#more-category-pop'))
                for (var index2 = 0; index2 < response[index].page.length; index2++) {
                    $(`<div class="brand-item">
                            <a href="">${response[index].page[index2].name}</a>
                            <ul></ul>
                            <a class="more" href="">更多</a>
                            </div>`).appendTo($('.category-panel')[index])
                    for (var index3 = 0; index3 < response[index].page[index2].model.length; index3++) {
                        $(`<li><a href="">${response[index].page[index2].model[index3]}</a></li>`).appendTo($('.brand-item ul')[index2])
                        
                    }

                }
            }
           
            
        }
    })
    $.ajax({
        
        url:"data/flow.json",
        success:function(response){
            $(`<ul></ul>`).appendTo("#section-flow")
            for (let index = 0; index < response.list.length; index++) {
                
             $(`<li><i></i><span>${response.list[index].name}<span/></li>`).appendTo("#section-flow ul");
             }
           
            
        }
    })

    $(".category-nav").on('mouseenter', 'li', function (events) {
        var index = $(".category-nav li").index(this);
        $('#more-category-pop').show();
        $('.category-panel').hide().eq(index).show();
        var target = $(events.target)
    });

    $(".category-nav").on('mouseleave', 'li', function (events) {
        $('#more-category-pop').hide();
    });

    $("#more-category-pop").on('mouseenter', function (events) {
        $("#more-category-pop").show();
    });

    $("#more-category-pop").on('mouseleave', function (events) {
        $("#more-category-pop").hide();
    });
    console.log("finised")
});
