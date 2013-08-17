var  express = require('express')
	,async = require('async')
	,db	= require('./../../lib/database')
	,_ = require('underscore')
	,assert = require('assert');



module.exports = function(io){
	var app = express(); 
	app.use(express.session());

	app.post('/login', function(req,res,next){
		var username = req.body.username
		  , password = req.body.password;

		doLogin(username,password, function (err, user){
			if(err) res.send(err);
			else
			{
				req.session.user_id = user._id;
				req.session.user = user;
				res.send(user);
			}
		});
		res.send('login sucessfully!');
	});

	function doLogin(username,password,callback){
		db.user.find(username,password,function(err,user){
			console.log(user);
			if(err) callback(err);
			else
			callback(user);
		});


	}

	return app;
};

