require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
       "cart":"cart",
        "recycle":"recycle",
        "header":"header"
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})
require(['recycle','jquery','jquery-cookie','cart','header'],function(recycle){
    console.log("load finished")
    recycle()
})