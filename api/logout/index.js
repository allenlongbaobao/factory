var express = require('express')
  , _ = require('underscore')
  , assert = require('assert');

module.exports = function(){
	var app = express();
	app.use(express.session);
	app.get('/logout', function(req, res, next){
		req.session = null;
		res.send('log out sucessfully!');
	});
	
	return app;
};
