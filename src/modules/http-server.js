'use strict';

module.exports = function(PORT = 3000) {
	const http = require('http');

	const requestHandler = (request, response) => {
		response.end('Node.js has its share of problems, but at least is not Java.');
	};

	const server = http.createServer(requestHandler);

	server.listen(PORT, (err) => {
		if (err) {
			return console.log('shit it the fan', err);
		}

		console.log(`HttpServer is ready on port ${PORT}`);
	});

	return server;
};