//Create web server
var http = require('http');
var fs = require('fs');
var url = require('url');
var querystring = require('querystring');
var comments = [];
var server = http.createServer(function(req, res){
  var parseUrl = url.parse(req.url);
  var pathName = parseUrl.pathname;
  if(pathName === '/'){
    fs.readFile('./index.html', function(err, data){
      if(err){
        console.log(err);
        res.end('404 Not Found');
      }
      res.end(data);
    });
  }else if(pathName === '/comment'){
    var comment = querystring.parse(parseUrl.query);
    comments.push(comment);
    res.end(JSON.stringify(comments));
  }
});
server.listen(3000, function(){
  console.log('Server is running at port 3000');
});
