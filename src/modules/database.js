'use strict';

const mongoClient = require('mongodb').MongoClient;

module.exports.isReady = new Promise(async (resolve, reject) => {
	try {
		//Connect MongoDB
		let database = await mongoClient.connect(
			'mongodb://localhost:27017', {useNewUrlParser: true}
		);
		console.log('Connected successfully');

		//Select and return database connection
		let db = database.db('dataPOA');

		module.exports.conn = db;
		resolve();
	}
	catch (err) {
		reject(err);
	}
});