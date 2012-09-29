var http = require('http')
var fs = require('fs')
var url = require('url')
var pubDir = __dirname + "/public"

var server = function(req, res) {
    var pathName = url.parse(req.url).pathname

    fs.readFile(pubDir + pathName, function(err, data) {
        if (err) {
            res.writeHead(404)
            res.end("404 Not Found")
        } else {
            res.writeHead(200)
            res.end(data)
        }
    })
}

http.createServer(server).listen(8080)