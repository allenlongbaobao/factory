module.exports = (function(){
	var config = {};

	config.session = {
		dbname: "factory_session",
		dbport: 12345,
		secret: "atplus"
	};
	config.database = {
		dbhost: "localhost",
		dbname: "factory",
		dbport: 12345
	};
	return config;
})();