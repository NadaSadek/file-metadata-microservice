/*jslint node: true */

'use strict';

const
	express = require('express'),
	app = express(),
	path = require('path'),
	config = require('./config'),
	bodyParser = require('body-parser');

app.use(express.static(__dirname + '/views'));
app.use(express.static(path.join(__dirname, '/public')));
app.use('/scripts/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const router = require('./app/routes/file-route');
app.use(router);


app.on('error', err => console.error('app couldn\'t start', err));
app.listen(config.port, err => {
	if(err) console.error('app issue', err);
	else console.log('app is listening on port', config.port);
});
