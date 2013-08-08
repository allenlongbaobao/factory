
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , config = require('./lib/config')
  , socketIo = require('socket.io')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
//app.set('views', __dirname + '/views');
//app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', function (req, res){ res.sendfile(__dirname + '/views/index.html')});
app.get('/users', user.list);

// access-control
app.all('*', function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'X-Requested-With');
	res.header('Access-Control-Allow-Methods', "PUT,POST,GET,DELETE,OPTIONS");
	res.header('X-Powered-By', "3.2.1")
	res.set('Content-Type', 'application/json;charset=utf-8');
	next();
});

io = socketIo.listen(app.listen(app.get('port')), {log: false});
io = require('./lib/socketConfig')(io, sessionStorage);
// API 
app.use(require('./api/login')(io));

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
