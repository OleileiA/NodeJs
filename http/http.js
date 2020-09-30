const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {

    // 屏蔽默认浏览器的头像icon的请求
    if (req.url === '/favicon.ico') {
        res.writeHead(200);
        return res.end();
    }

    res.writeHead(200);
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}).listen(3000);
