define([

    "jquery",
    "jquery-cookie"
], function ($) {

    $.ajax({
        url: "data/banner.json",
        success: function (response) {
            for (let index = 0; index < response.list.length; index++) {
            $(`<li class="${response.list[index].class}"><dl><dt><a href="">${response.list[index].name}</a></dt></dl></li>`).appendTo($('.category-nav')) 
            }
        }
    })

    // $.ajax({
    //     url: "data/banner1.json",
    //     success: function (response) {
            
    //         for (let index = 0; index < response.list.length; index++) {
    //             $(`<div class="category-panel"><div>`).appendTo($('#more-category-pop"')) 
    //             for (let index = 0; index < array.length; index++) {
                    
    //                 $(`<div class="brand-item"></div>`).appendTo($(`.category-panel:nth-child(${index+1})`))
                    
    //             }
    //         }
    //     }
    var z =0;
    for (let index = 0; index < 5; index++) {
        $(`<div class="category-panel">${index}</div>`).appendTo($('#more-category-pop')) 
         for (let index = 0; index < 5; index++) {
            
             $(`<div class="brand-item"></div>`).appendTo($(`.category-panel:nth-child(${index+1})`))
            z++;
         }
    }
    
    $(".category-nav").on('mouseenter','li', function (events) {
        var index = $(".category-nav li").index(this);
        $('#more-category-pop').show();
        $('.category-panel').hide().eq(index).show();
        var target = $(events.target)                                              
    });

    $(".category-nav").on('mouseleave','li', function (events) {
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

// (function () {
//     $.ajax({

//         url: "data/banner.json",

//         success: function (response) {
//             alert(response.list[1].class)
//         }
//     })
// })()