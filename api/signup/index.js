var  express = require('express')
	,async = require('async')
	,util = require('../../lib/util') 
	,db = require('../../lib/database')
	,fs = require('fs')
	,_ = require('underscore');

module.exports = function(io){
	var app = express();
	var formatConverter = require('../../lib/formatConverter')(io);

	app.post('/signup', function(req, res, next){
		var userInfo = req.body;


	});
}
