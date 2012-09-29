var http = require('http')

var server = function(req, res) {
    req.on('data', function(chunk) {
        console.log(chunk)
    })
    res.writeHead(202, {"Content-Type": 'text/html'})
    res.end("Hello World! I'm doing some Node!")
}

http.createServer(server).listen(8080)