var config = require('../config').app;
module.exports = ( function(Schema){
	var communication = new Schema({

		/*
		 * qq or msn
		 * 
		 * */
		qq			:	{
			type	: String,
			trim	: true
		},

		/*
		 * telephone
		 * */
		telephone	:	{
			type	: String,
			trim	: true
		},
		
		/*
		 * mobilePhone
		 * */
		mobilephone	:	{
			type	: String,
			trim	: true,
			validate:	[
				{
					validator: function(val){
						return val.length == 11;
					},
					msg: "mobile phone's lenght is equal to 11"
				}
			]
		},

		/*
		 * email
		 * */
		email		:	{
			type	: String,
			unique	: true,
			required: true,
			trim	: true,
			validate: [
				{
					validator: function(val) {

					},
					msg : "email fomate error"
				}
			]
		},

		/*
		 * address
		 * */
		address		:	{
				type: Schema.Types.ObjectId,
				ref: "address"
		},

		/*
		 * home page
		 * */
		homepage	:	{
			type	: String,
			trim	: true
		}

		});
	return communication;
})(require('mongoose').Schema);
