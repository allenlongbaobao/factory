module.exports = (
	function(Schema){
	var major = new Schema({
		/*
		 * school
		 * */
		school		:	{
			type	: String,
			trim	: true
		},

		/*
		 * college
		 * */
		college		:	{
			type	: String,
			trim	: true
		},

		/* 
		 * domain
		 * */
		domain		:	{
			type	: String,
			trim	: true
		},

		/*
		 * status
		 * */
		state		:	{
			type	: String,
			trim	: true
		}

		

	});
		return major;
	}
)(require('mongoose').Schema);
