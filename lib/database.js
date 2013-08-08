var mongoose = require('mongoose')
   ,config = require('./config');

  console.log(config.database);

mongoose.connect(
	'mongodb://' + config.database.dbhost + ':' + config.database.dbport +'/' + config.database.dbname
	,{auto_reconnect : true}
	, function (err,conn) {
		if(err) throw err;
		console.info("Connect to mongodb sucessfully");
	}
);

exports.user 		= mongoose.model('user', require('./schema/user'));
