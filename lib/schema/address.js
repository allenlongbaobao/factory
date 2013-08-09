var config = require('../config').app;
module.exports = (function(Schema){
	var address = new Schema({
		
		/*
		 * nation
		 * */
		nation			:	{
			type	: String,
			trim	: true,
		},

		/*
		 * province
		 * */
		province		:	{
			type	: String,
			trim	: true
		},

		/*
		 * city
		 * */
		city			:	{
			type	: String,
			trim	: true
		},

		/*
		 * detail
		 **/
		detail			:	{
			type	: String,
			trim	: true
		},
		
		/*
		 * post code
		 * */

		postcode		:	{
			type	: String,
			trim	: true
		}

	});
	
	return address;

}
)(require('mongoose').Schema);
