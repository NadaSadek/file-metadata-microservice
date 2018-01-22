/*jslint node: true */

'use strict';

const
  express = require('express');

exports.open_homepage = (req, res) => res.render('index');

exports.send_file_data = (req, res) => {
  res.json({filename: req.file.originalname, type: req.file.mimetype, size: req.file.size});
};
