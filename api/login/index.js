var  express = require('express')
	,async = require('async')
	,db = require('../../lib/database')
	,_ = require('underscore');

module.exports = function (io) {
	var app = express ();
	app.post('/login', function (req,res,next){
		var  url = req.body.url
			,username = req.body.username
			,password = req.body.password;
		res.send("hello");
	});

	function dologin(username, password, callback){
		db.user.login(username, password, function (err, user){
			if(err) return callback(err);
			if(!user) return callback("user not found");
			callback(null, user);
		});
	}
	return app;
}
