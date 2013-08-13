var vows = require('vows')
	,assert = require('assert');

var login = require('./../../api/login');

var dologin = login.dologin; 
var get_information = login.getinfomation;
vows.describe('have currected login information').addBatch({
	'user exists or not ':{
		topic: new(dologin),

		'have error': function(dologin){
			assert.equal(dologin.age,1);
		}
	},

	'test':{
		topic: function(){return 1;},

		'is 1': function(topic){
			assert.equal(topic,1);
		}
	},

	'test for module':{
		topic: get_information,

		'yes or no': function(topic){
			assert.equal(topic,'yes');
		}

	}

}).export(module);
