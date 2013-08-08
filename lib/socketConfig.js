var   async = require('async')
	, cookie = require('cookie')
	, config = require('./config')
	, db = require('./database')
	, _ = require('underscore')
	, util = require('./util')
	, parseCookie = require('connect').utils.parseSignedCookie;
	