$(function(){
    // $('#login-tabset').on('click','.tab', function (event) {
    //     var target = $(event.target);
    //     target.addClass("selected").siblings("div").removeClass("selected");
    // });

    $('.account-login-method').click(function () { 
        
        $('.account-login-method').addClass("selected").siblings("div").removeClass("selected");
        $('#form-sms-login').addClass("selected").siblings("div").removeClass("selected");
    })

    $('.sms-login-method').click(function () { 
    
        $('.sms-login-method').addClass("selected").siblings("div").removeClass("selected");
       $('#form-mobile-login').addClass("selected").siblings("div").removeClass("selected");
    });

    $("#keep-login-wrap").click(function(){
        $("#keep-login-icon").toggleClass("checked");
      });
})