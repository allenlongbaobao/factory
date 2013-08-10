module.exports = (
	function(Schema){
		var corporation = new Schema({
			/*
			 * name 
			 * */
			name			:	{
				type	: String,
				trim	: true
			},

			/*
			 * introduction
			 * */
			introduction	:	{
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
			 * the corporation is in land or foreign
			 * */

			inland_or_foreign	:	{
				type	: String,
				trim	: true
			},

			/* 
			 * the position of corporaion
			 * */
			position			:	{
				type	: Schema.Types.ObjectId,
				ref		: "address"
			},

			/*
			 * create time
			 * */
			creat_time			:	{
				type	: String,
				trim	: true
			},

			/*
			 *contract person
			 */
			contract_person		:	{
				type	: String,
				trim	: true
			},

			/*
			 * communication
			 **/
			communication		:	{
				type	: String,
				trim	: true
			},

			/*
			 * corporation website
			 * */
			corporation_website	:	{
				type	: String,
				trim	: true
			},

			/*
			 * corporation	member number
			 * */
			member_number		:	{
				type	: Number,
				trim	: true
			},

			/*
			 * remark
			 * */
			remark				:	{
				type	: String,
				trim	: true
			},
			
			/*
			 * if join the alumnus
			 * */
			if_join_alumnus		:	{
				type	: Boolean,
				trim	: true
			},

			/*
			 * college alumnus information
			 * */
			college_alumnus		:	{
				type	: String,
				trim	: true
			},

			/*
			 * region alumus information
			 * */
			region_alumus		:	{
				type	: String,
				trim	: true
			}


		});	
		return corporation;
	}
)(require('mongoose').Schema);
