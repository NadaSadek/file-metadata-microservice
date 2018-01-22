/*jslint node: true */

'use strict';

const
	express = require('express'),
	router = express.Router(),
	multer = require('multer'),
  upload = multer(),
	fileController = require('../controllers/file-controller');

router.get('/', fileController.open_homepage);
router.post('/upload', upload.single('upfile'), fileController.send_file_data);


module.exports = router;
