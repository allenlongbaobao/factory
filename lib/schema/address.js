var config = require('../config').app;
module.exports = (function(Schema){
	var address = new Schema(
		
		/*
		 * nation
		 * */
		nation			:	{
			type	: String
		},

		/*
		 * province
		 * */
		province		:	{
			type	: String
		}

	);
	
	return address;

}
)(require('mongoose').Schema);
