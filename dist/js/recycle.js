define(["jquery", "jquery-cookie"], function ($) {

    var main = function () {
        $(function () {
            var sumPrice = 0;
            var sumnum = 0;
            if ($.cookie("goods")) {
                var arr = eval($.cookie("goods"))


                $(".hasgoods ul").html("")

                $.each(arr, function (indexInArray, valueOfElement) {
                    var idstr = valueOfElement.id
                    var num = valueOfElement.num
                    sumnum += num;
                    $.ajax({
                        url: "data/goods.json",
                        dataType: "json",
                        success: function (response) {

                            $.each(response, function (indexInArray, valueOfElement) {
                                $.each(valueOfElement.lists, function (indexInArray, valueOfElement) {
                                    $.each(valueOfElement.list, function (indexInArray, valueOfElement) {
                                        if (valueOfElement.id == idstr) {
                                            sumPrice += Number(num)*(Number(valueOfElement.price));
                                            
                                            $(`<li><div class="product_image"><img src="images/goods/${idstr}.jpg" alt=""></div>
                                     <div class="product_info">
                                      <div class="product_name">${valueOfElement.name}</div>
                                        <div class="product_price"><span>${valueOfElement.price}</span></div> 
                                        <div class="product_num">(${num})件</div>
                                        </div></li>`).appendTo(".hasgoods ul");
                                            return false
                                        }
                                    });
                                });
                            });
                            $("#cart_pop_checkout .cart_checkout_count span:nth-child(2)").html(sumPrice);
                        }
                    });


                });

            }
            $("#recycle-cart .highlight").html(sumnum);
            $("#cart_pop_checkout .cart_checkout_count span:nth-child(1)").html(sumnum);
            
            

        })
    }
    return main;
})