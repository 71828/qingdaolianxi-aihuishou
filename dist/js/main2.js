

require.config({
    paths: {
        "jquery": "jquery-1.11.3",
        "jquery-cookie": "jquery.cookie",
        "inquiry":"inquiry",
        "recycle":"recycle"
    },
    shim:{
        "jquery-cookie": ["jquery"],
    }
})
require(['recycle','jquery','jquery-cookie','inquiry'],function(recycle){
    console.log("load finished")
    recycle()
})