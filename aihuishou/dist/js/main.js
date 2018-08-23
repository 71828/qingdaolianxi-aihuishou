console.log("加载完成");

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index",
        "banner":"banner"
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})
require(['jquery','jquery-cookie','index','banner'],function(){
    console.log("load finished")
    
})