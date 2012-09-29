var request = require('request')
var fs = require('fs')

request.get('http://substack.net/images/node_turtle_plume.png')
       .pipe(fs.createWriteStream("turtle_plume.png"))