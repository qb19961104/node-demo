//公共模块
var tools={
    add:function(x,y){
        return x+y;
    },
    sayhello:function(){
        return '你好，node.js'
    }
}
//exports.tools=tools;
module.exports=tools;