/*jslint node: true */

'use strict';

const
	express = require('express'),
	router = express.Router(),
	fileController = require('../controllers/file-controller');

router.get('/', fileController.open_homepage);
router.post('/upload', fileController.send_file_data);


module.exports = router;
