var  express = require('express')
	,async = require('async')
	,util = require('../../lib/util') 
	,db = require('../../lib/database')
	,fs = require('fs')
	,_ = require('underscore');

module.exports = function(io){
	var app = express();

	app.post('/signup', function(req, res, next){
		var userInfo = req.body;

		createNewAccount(userInfo, function(err,result){
				if(err) res.send(err);
				res.send(result);

		});
		
		res.send('signup successfully!');
		
	});

	function createNewAccount(userInfo, callback){
		db.user.isExists(userInfo.username,userInfo.email, function(err, user){
			if(err) callback(err);
			var newAccount = db.user(userInfo);
			newAccount.save(function(err){
				if (err) callback(err);
				else
				callback(null, 'ok');
			});

		});
	}

	return app;
}
