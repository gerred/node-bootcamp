var http = require('http')
var MyConstructor = require('./myconstructor')

http.createServer(function(request, response) {
  
  var c = new MyConstructor();
  c.on('data', function(data) {
    console.log(data);
  });
  c.on('end', function(){ console.log('end'); } );

  
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}).listen(8888);