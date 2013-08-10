module.exports = (
	function(Schema){
	var work = new Schema(
		{
			/*
			 * start year
			 * */
			start		:	{
				type	: String,
				trim	: true
			},
			
			/*
			 * end year
			 * */
			end			:	{
				type	: String,
				trim	: true
			},

			/*
			 * work company
			 * */
			company		:	{
				type	: String,
				trim	: true
			},

			/*
			 * department
			 * */
			department	:	{
				type	: String,
				trim	: true
			},

			/*
			 * salary 
			 * */
			salary		:	{
				type	: Number,
				trim	: true
			},

			/*
			 * city
			 * */
			city		:	{
				type	: String,
				trim	: true
			},

			/*
			 * company email
			 * */
			company_email	:	{
				type	: String,
				trim	: true
			},

			/*
			 * company website
			 * */
			company_website	:	{
				type	: String,
				trim	: true
			},

			/*
			 * leave reason
			 * */
			leave_reason	:	{
				type	: String,
				trim	: true
			}

});
		return work;
})(require('mongoose').Schema);
