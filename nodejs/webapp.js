var http = require('http')
var config = require('./config.json');

http.createServer(onRequest).listen(config.port);
console.log('Server has started');

function onRequest(request, response){
  response.writeHead(200);
  response.write('https://coralogix.com/integrations/');
  response.end();
}
