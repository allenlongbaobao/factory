var config = require('../config').app;
module.exports = (function(Schema){
	var education = new Schema({
		/*
		 * highest background
		 * */
		hightest_background_school		:	{
			type	: String,
			require	: true,
			trim	: true
		},

		/*
		 * major array
		 * */
		major					:	[{
			major	: {
				type	: Schema.Types.ObjectId,
				ref		: "major"
			}		
		}],
			

		/*
		 * high school class
		 * */
		high_school_class		:	{
			type	: String,
			trim	: true
		},

		/*
		 * middle school class
		 * */
		middle_school_class		:	{
			type	: String,
			trim	: true
		},
		
		/*
		 * prior school class 
		 * */
		prior_school_class		:	{
			type	: String,
			trim	: true
		}

	});
	return education;
})(require('mongoose').Schema);
