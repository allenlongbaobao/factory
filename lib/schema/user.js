module.exports = (function (Schema) {
	var user = new Schema({
		/*
		 * 用户名
		 *
		 * -- 字符串类型
		 * -- 唯一
		 * -- 必填
		 * -- 过滤首尾空白字符
		 * -- 长度大于等于6
		 * -- 不能包含非法字符
		 *
		 * */
		username		:	{
			type	: String,
			unique	: true,
			required: true,
			trim	: true,
			validate: [
				{
					validator: function (val) {
						return val.length >= 1;
					}, 
					msg : "用户名必须大于等于6个字符"
				}
			]
		},
	
		/*
		 * 用户注册邮箱
		 *
		 * -- 字符串
		 * -- 每个邮箱只能注册一次
		 * -- 必填
		 * -- 邮箱格式要求
		 * */
		email			: {
			type	: String,
			unique	: true,
			required: true,
			validate: [
				{
					validator: function (val) {
						return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\ ".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA -Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
					},
					msg	: "邮箱格式错误"
				}
			]
		},
		
		/*
		 * 用户创建日期
		 *
		 * -- 日期类型
		 * -- 默认当前时间
		 * -- 必填
		 *
		 * */
		create_time		: {
			type	: Date,
			default	: Date.now,
			required: true
		},
	
		/*
		 * 用户设置的密码
		 * 
		 * -- 字符串类型
		 * -- 必填
		 * -- 长度6-15
		 * -- 不能包含中文字符
		 *
		 * */
		password		: {
			type	: String,
			required: true,
			validate: [
				{
					validator : function (val) {
						return val.length >= 6 && val.length <= 15;
					},
					msg : "密码长度只能在6到15"
				}
			]
		},
	
		/*
		 * 用户性别
		 *
		 * -- 字符串类型
		 * -- 只能为"male"或者"female"
		 * -- 过滤首尾空白字符
		 * -- 自动转换成小写字符
		 *
		 * */
		gender			: {
			type	: String,
			enum	: ['male', 'female'],
			trim	: true,
			lowercase: true
		},
	
		/*
		 * 用户个性签名
		 *
		 * -- 字符串类型
		 * -- 过滤首尾空白字符
		 * -- 不能超过200字符
		 *
		 * */
		signature		: {
			type	: String,
			trim	: true,
			validate: [
				{
					validator : function (val) {
						return val.length <= 200;
					},
					msg : "个性签名不能超过200字"
				}
			]
		},
	
		/*
		 * 用户个性化头像链接
		 *
		 * -- 字符串类型
		 * -- 过滤首尾空白字符
		 * -- 默认为系统提供的头像
		 * -- 必填
		 *
		 * */
		avatar			: {
			type	: String,
			trim	: true,
			default : "images/default.jpg",
			required: true
		},

		/*
		 * 用户的联系方式
		 * */
		communication	: {
			type	: Schema.Types.ObjectId,
			ref		: "communication",
			trim	: "true"
		},
		 
		/*
		 * 用户的教育经历
		 * */
		education		: {
			type	: Schema.Types.ObjectId,
			ref		: "education",
			trim	: "true"
		},

		/*
		 * 用户的专业情况
		 * 
		 **/
		major			:{
			type	: Schema.Types.ObjectId,
			ref		: "major",
			trim	: "true"
		},

		/*
		 * 用户的工作情况
		 * */
		corporation		: {
			type	: Schema.Types.ObjectId,
			ref		: "corporation",
			trim	: "true"
		}
		
	});

	user.statics.isExists = function (username, email, callback) {
		this.findOne({$or: [{username: username}, {email: email}]}, callback);
	}

	user.statics.login = function (username, password, callback) {
		this.findOne({username: username, password: password}, callback);
	};

	user.statics.findInUsernameGroup = function (nameGroup, callback) {
		this.find({username: {$in: nameGroup}}, '_id', callback);
	};

	user.statics.findByIdWithPopulateFriends = function (userId, callback) {
		this.findOne({_id: userId})
			.populate('friends.user')
			.exec(callback);
	};

	user.virtual('fullPathAvatar').get(function () {
		//return "http://222.200.185.14/" + this.avatar;
	});

	return user;
})(require('mongoose').Schema);
