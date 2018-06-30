'use strict';

const DB = require('./modules/database');

DB.isReady.then(async () => {
	console.info('Datbase is ready');

	// let server = HttpServer();
	// socket server

	// um arquivo qualquer que faz algo com a db
	require('./modules/dosomething');

	// mais requires
	// etc
}).catch((err) => {
	console.error('damn', err);
	process.exit(1);
});
