var arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]

for (var i = 0; i < 100000; i++) { arr.push(i)}
var http = require('http')

var server = function(req, res) {
    res.writeHead(200)
    processNumbers(arr, function(numbers) {
        for (var i = 0; i < numbers.length; i++) {
            res.write(Math.pow(numbers[i],2).toString())
        }
    })
    res.end()
}

function processNumbers(array, callback) {
    var processedArray = []
    for (var i = 0; i < array.length; i++) {
        process.nextTick(function() {
            processedArray.push(Math.pow(array[i], 2))
        })
    }

    callback(processedArray)
}

http.createServer(server).listen(8080)