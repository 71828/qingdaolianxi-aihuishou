define(["jquery", "jquery-cookie"], function ($) {

    
  
    $(window).scroll(function(){
        
        var scroH = $(this).scrollTop();
        if(scroH >=100){
            $("#header").addClass('fixedTop').css("top","0px");
            $("#body").css("margin-top","168px")
            $(".tab-menu .clearfix li:nth-child(2)").addClass('scroll')
            $(".tab-menu .clearfix li:nth-child(3)").addClass('scroll')
            $(".tab-menu .clearfix li:nth-child(4)").css("display","none")
            $(".tab-menu .clearfix li:nth-child(5)").css("display","none")
      
        }else{
            $("#header").removeClass('fixedTop').css("top","-80px");
            $("#body").css("margin-top","0px")
            $(".tab-menu .clearfix li:nth-child(2)").removeClass('scroll')
            $(".tab-menu .clearfix li:nth-child(3)").removeClass('scroll')
            
            $(".tab-menu .clearfix li:nth-child(4)").css("display","inline-block")
            $(".tab-menu .clearfix li:nth-child(5)").css("display","inline-block")
        }
       
    })

    $('#goTop').on('click', function () {
        $('body,html').animate({scrollTop:0},300);
        
        

    });
    
    
})