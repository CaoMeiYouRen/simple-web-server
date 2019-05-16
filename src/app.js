var express = require("express");
var app = express();//使用express框架
var path = require("path");//这个是node.js自带的路径处理模块
/** 
 * app.use("/", express.static(path.join(__dirname, "public")));
 * app.use("访问路径",express.static("要公开的目录"))
 * 下面这段的意思是通过 域名/xxx 能够访问到 public/xxx 的内容
 * 即将public目录作为静态目录公开
 * path.join(__dirname, "public")能够获取到public的绝对目录
 * 使用绝对目录作为根域名有一个好处就是能够保证找到这个目录，相对目录可能会出错
*/
app.use("/", express.static(path.join(__dirname, "public")));
var http = require("http");//导入http模块
app.get("/", (req, res) => {//当以get方式访问根目录时，返回index.html
    res.sendFile(__dirname + "/public/index.html");
});
let port = 80;//脚本运行端口为80
http.createServer(app).listen(port, () => {
    console.log("HTTP运行端口为 http://127.0.0.1:" + port);
});

