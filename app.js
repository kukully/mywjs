
var http = require('http')
var fs = require('fs')    //引入模块

var server = http.createServer()    // 创建服务器对象
server.listen(3001,'192.168.83.82',()=>{
		console.log('the server is running at http://192.168.83.82:3001');
})
