var express = require('express');
var fs=require('fs');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
 var data = fs.readFileSync("index.html"); 
 var buffer = new Buffer(data, "utf-8");
 response.send(buffer.toString());
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
