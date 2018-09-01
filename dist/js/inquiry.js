define(["jquery","recycle","jquery-cookie"], function ($,recycle) {
    var idstr = window.location.search.substr(4)

    $.ajax({
        url: "data/goods.json",
        dataType: "json",
        success: function (response) {
            $.each(response, function (indexInArray, valueOfElement) {
                $.each(valueOfElement.lists, function (indexInArray, valueOfElement) {
                    $.each(valueOfElement.list, function (indexInArray, valueOfElement) {
                        if (valueOfElement.id == idstr) {
                            $(".fp_iconfont").html(valueOfElement.price);
                            $(`<img src="${valueOfElement.img}">
                            <div class="name">${valueOfElement.name}</div>`).appendTo(".img-wrap");
                            return false;
                        }
                    });
                });
            });
        }
    });
    //==================================




    
    //===============================================
    $("#add-cart").on('click', function () {

        if ($.cookie("goods")) {
            var str = $.cookie("goods")
            var arr = eval(str);
            var flag = false;
            var cookieStr = null
            $.each(arr, function (indexInArray, valueOfElement) {
                if (valueOfElement.id == idstr) {
                    valueOfElement.num++;
                    flag = true;
                }
            });
            if (!flag) {
                arr.push({
                    id: idstr,
                    num:1
                })
            }
            cookieStr = JSON.stringify(arr);
            $.cookie('goods', cookieStr, {
                expires: 7,
                path: '/'
            });
        } else {
           
            
            $.cookie('goods', `[{id:${idstr},num:1}]`, {
                expires: 7,
                path: '/'
            });
        }
        console.log($.cookie("goods"))
        recycle();

    });
})