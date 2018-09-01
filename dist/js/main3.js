require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "login":"login"
       
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})
require(['jquery','jquery-cookie','login'],function(){
    console.log("load finished");
    
})