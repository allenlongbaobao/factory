var   async = require('async')
	, cookie = require('cookie')
	, config = require('./config')
	, db = require('./database')
	, _ = require('underscore')
	, util = require('./util')
	, parseCookie = require('connect').utils.parseSignedCookie;
	
module.exports = function (io, sessionStorage){
	io.configure(function(){
		io.set('authorization', function(handSharkData, authorizationCallback){
			async.waterfall(
				[
					getSessionIdIfCookieExists,
					setSessionIfSessionIdExists
				],
				function(err,result){
					if (err) console.log(err);
					authorizationCallback(null, true);
				}
			);
			function getSessionIdIfCookieExists(){
				var sessionId;
				if ( !handShakeData.headers.cookie){
					handShakeData.cookie = {};
					sessionId = undefined;
				}else {
					handShakeData.cookie = cookie.parse(handShakeData.headers.cookie);
					sessionId = handShakeData.cookie['connect.sid'] ? parseCookie(handShakeData.cookie['connect.sid'], config.session.secret) : undefined;
				}
				callback(null, sessionId);
			};

			function setSessionIfSessionIdExists(sessionId, callback){
				if (sessionId) {
					sessionStorage.get(sessionId, function(err, session){
						if (err) return callback (err);
						handShakeData.session = session;
						callback(null);
					});
				} else {
					callback(null);
				}
	 		};
			
		});
	});

}
