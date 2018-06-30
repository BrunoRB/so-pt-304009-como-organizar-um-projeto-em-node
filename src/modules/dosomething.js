'use strict';

const DB = require('./database');

const collection = DB.conn.collection('maybeMongodbIsNotTheBestChoice');

collection.insertMany([
	{name: 'afasdfasdfa'},
	{name: 'erqwqwerwqerwqer'}
]).then(() => {
	return collection.find({}, {limit: 5}).toArray();
}).then((res) => {
	console.info(res);
});