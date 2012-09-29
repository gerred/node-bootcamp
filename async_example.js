var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

for (var i = 0; i < 10000; i++) { arr.push(i)}
var http = require('http')
var async = require('async')

var server = function(req, res) {
    res.writeHead(200)
    async.forEach(arr, function(num) {
        res.write(Math.pow(num, 2).toString())
    }, function() {
        res.end()
    })
}

http.createServer(server).listen(8080)