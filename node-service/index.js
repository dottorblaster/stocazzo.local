'use strict';

var http = require('http');
var mdns = require('mdns');

var server = http.createServer(function(request, response) {
  var body = JSON.stringify({response: "stocazzo"});
  var options = {
    headers: { 'Content-Type': 'application/json' }
  };
  response.writeHead(200, options);
  response.end(body);
});

server.listen(3030, function() {
  var advertisement = mdns.createAdvertisement(
    mdns.tcp('flyweb'), 3030, {name: 'stocazzo.local'}
  );
  advertisement.start();
});
