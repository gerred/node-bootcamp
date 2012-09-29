var http = require('http')
var fs = require('fs')
var url = require('url')
var pubDir = __dirname + "/public"

var server = function(req, res) {
    var pathName = url.parse(req.url).pathname

    try {
        var contents = fs.readFileSync(pubDir + pathName)
        res.writeHead(200)
        res.end(contents)
    } catch (e) {
        res.writeHead(404)
        res.end("404 Not Found")
    }
}

http.createServer(server).listen(8080)