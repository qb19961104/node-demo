//不带后缀名也可以
//如果同级没有这个模块，就回去node_modules下查找这个模块
var tools=require('./tools.js')
console.log(tools.add(1,2));
console.log(tools.sayhello())