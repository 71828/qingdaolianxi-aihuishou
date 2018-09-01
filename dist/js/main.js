

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "index": "index",
        "banner":"banner",
        "hotsales":"hotsales",
       "share":"share",
        "recycle":"recycle",
        "header":"header"
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})
require(['recycle','jquery','jquery-cookie','index','banner','hotsales','share','header'],function(recycle){
    console.log("load finished");
    recycle();
})