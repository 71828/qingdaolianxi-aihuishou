define(["jquery", "jquery-cookie"], function ($) {
    var verifiedCode = null;
    var account = null;
    var password = null;
    
    //===============切换登陆方式=============================================
    $("#login-tabset").on('click', '.tab', function (e) {
        var target = $(e.target);
        var index = $('#login-tabset .tab').index(this)
        target.addClass("selected").siblings(".tab").removeClass("selected");
        $('#form-login .component-form').removeClass("selected").eq(index).addClass("selected");
    });
    //==============获取验证码=====================================
    $("#sms-mobile").on('input propertychange', function tt(e) {
        if ($("#sms-mobile").val().length == 11) {
            $("#btn-get-smscode").off("click").on('click', function () {
                account = $("#sms-mobile").val();
               
                verifiedCode = parseInt(Math.random() * 1000000);
                alert("验证码:" + verifiedCode);
                $(this).off("click").css("background", "#e5e5e5");
                var data = 30;
                var time = setInterval(function () {
                    data--;
                    $("#btn-get-smscode").text("").append(data);
                    if (data == 0) {
                        clearInterval(time);
                        tt();
                        $("#btn-get-smscode").text("获取验证码");
                    }
                }, 100)
            }).css("background", "#fcdb00");
        } else {
            $("#btn-get-smscode").off("click").css("background", "#e5e5e5");
        }

    })
    //================验证码验证==================================
    $("#submit-sms-login").on('click', function () {
        if ($('#sms-captcha').val() == verifiedCode) {


            $('.section-main.hidden').removeClass("hidden").siblings(".section-main").addClass("hidden");
        } else {
            alert("验证码错误");

        }

    });

    
    //===============验证密码==============================
    $("#login-pwd").bind('input propertychange', function (e) {
        password = $("#login-pwd").val();

    });
    $("#submit-setloginpwd").click(function (e) {
        if ($("#login-pwd-repeat").val() == password) {
            
            $.ajax({
                type: "post",
                url: "php/addUser.php",
                dataType: "JSON",
                data: {
                    "user_name": account,
                    "password": password,

                },

                success: function (data) {
                   
                    switch (data) {
                        case 1:
                            alert("该用户已存在！请换一个用户名注册。")
                            break;
                        case 2:
                            alert("注册成功！");
                            // $.cookie("user",username);
                            // $.cookie("limit",0);
                            window.location.href = "index.html";
                            break;

                    }
                }
            })


        } else {
            alert("注册失败")
        }

    });
    //=======================用户登录==========
    $("#submit-account-login").on("click", function () {
        
        $.ajax({
            type: "POST",
            url: "php/userLogin.php",
            dataType: "JSON",
            data: {
                "user_name": $("#account-name").val(),
                "password": $("#account-passwd").val()
            },
            success: function (data) {
                
                switch (data) {
                    case 2: 
                        alert("欢迎登录")
                        // $.cookie("user", username);
                        // $.cookie("limit", 0);
                         window.location.href = "index.html";
                        break;

                    case 3: 
                        alert("密码错误！");
                        break;
                    case 4: 
                        alert("该用户不存在！");
                        break;
                    case 0: 
                        alert("验证码不正确！");
                        break;
                }

            }
        })
    });
    //=============test===========
   
    //===========是否记住登录状态============================
    $("#keep-login-wrap").click(function () {
        $("#keep-login-icon").toggleClass("checked");
    });
});