var http = require('http'),
	host = "127.0.0.1",
	port = 3000;

var server = http.createServer(function (request, response) {
	response.writeHead(200, {'Content-type': 'text/plain'});
	response.end("hello api-loser");
});

server.listen(port, host, function () {
	console.log("Listening on: ", host + ":" + port);
});
