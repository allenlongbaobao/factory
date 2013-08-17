var mongoose = require('mongoose')
   ,config = require('./config');


mongoose.connect(
	'mongodb://' + config.database.dbhost + ':' + config.database.dbport +'/' + config.database.dbname
	,{auto_reconnect : true}
	, function (err,conn) {
		if(err) throw err;
		console.info("Connect to mongodb sucessfully");
	}
);

exports.user			= mongoose.model('user', require('./schema/user'));
exports.communication	= mongoose.model('communication', require('./schema/communication'));
exports.address			= mongoose.model('address', require('./schema/address'));
exports.education		= mongoose.model('education', require('./schema/education'));
exports.major			= mongoose.model('major', require('./schema/major'));
exports.work			= mongoose.model('work', require('./schema/work'));
exports.corporation		= mongoose.model('corporation', require('./schema/corporation'));
