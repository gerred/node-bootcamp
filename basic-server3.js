var express = require('express')
var app = express()
var pubName = __dirname + '/public'

app.use(express.static(pubName))

app.get('/', function(req, res) {
    res.send("Hello, world!")
})

app.get('/foo', function(req, res) {
    res.send("nope")
})

app.post('/todos', function(req, res) {
    
})

app.listen(8080)
