var request = require('request')
var http = require('http')
var url = require('url')

var server = function(req, res) {
    request('http://substack.net/images/node_turtle_plume.png').pipe(res)
}

http.createServer(server).listen(8080)