define(["jquery", "jquery-cookie"], function ($) {


    if ($.cookie("goods")) {
        var arr = eval($.cookie("goods"))
        $(".hasgoods ul").html("")
        $.each(arr, function (indexInArray, valueOfElement) {
            var idstr = valueOfElement.id
            $.ajax({
                url: "data/goods.json",
                dataType: "json",
                success: function (response) {
                    $.each(response, function (indexInArray, valueOfElement) {
                        $.each(valueOfElement.lists, function (indexInArray, valueOfElement) {
                            $.each(valueOfElement.list, function (indexInArray, valueOfElement) {
                                if (valueOfElement.id == idstr) {
                                    $(` <tr class="product">
                                    <td><label for="" class="checkbox">
                                            <input type="checkbox" name="subBox" value="on"><i class="sbox"></i></label> </td>
                                    <td class="info"> <a href=""><img src="${valueOfElement.img}" alt="">
                                            <span>${valueOfElement.name}</span></a> </td>
                                    <td class="price">
                                        <span class="red"> ￥${valueOfElement.price}</span></td>  
                                    <td class="operate"><a href="">删除</a></td>
                                </tr>`).appendTo($(".cart-wrap tbody"));
                                    return false
                                }
                            });
                        });
                    });
                }
            });
        });
    }
    $(".checkAll").click(function (e) { 
        if($(this).prev().prop("checked")){
        $(this).prev().prop("checked",false)}else{
            $(this).prev().prop("checked",true)
        }
        allChecked =$(this).prev().prop("checked")
        $("input[name='subBox']").each(    
            function(){
                this.checked = allChecked;
            })
     });

     $('.cart-wrap tbody').on("click",".sbox", function () {
        if($(this).prev().prop("checked")){
            $(this).prev().prop("checked",false)}else{
                $(this).prev().prop("checked",true)
            }
     });
     function cc(){
         var num =0;
        $("input[name='subBox']").each( 
            $("input[name='subBox']").each(    
                function(){
                    this.prev()
                    if(this.checked){
                        
                    }
                })
        )

    }
     


























    // $(window).scroll(function(){

    // var navH = $(".nav").offset().top;
    // })
})