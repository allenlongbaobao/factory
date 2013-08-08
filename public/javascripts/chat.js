(function (global, $) {
var $chats = $('#chatContent');
var $notice = $('#notice');

var timeStamp = Date.now() + ((1000 * Math.random()) >> 0);
var pubnub_setup = {
	channel: 'chat',
	//publish_key: 'pub-c-08fd730f-c3e3-482c-b6fd-61a7925d8919',
	//subscribe_key: 'sub-c-13b71b0a-fd74-11e2-b211-02ee2ddab7fe',
	publish_key: 'demo',
	subscribe_key: 'demo',
	password: '#KJ$K)*AF*AF(D)(F)AFKLFJ',
	user: {timeStamp: timeStamp}
};
var chat = io.connect('http://pubsub.pubnub.com/atplus', pubnub_setup)

chat.on('connect', function (a) {
	getHistory();
	allStart();
});

chat.on('message', function (message) {
	if (message.id != timeStamp) {
		printMessage(message.content);
	}
});

chat.on('join', function (user) {
	noticeMeForJoin();
});

chat.on('leave', function (user) {
	noticeMeForLeave();
});

var getHistory = function () {
	chat.history({count: 10}, function (chats) {
		chats[0].forEach(function (record) {
			printMessage(record.data.content);
		});
	});
};

var allStart = function () {
	$('#main').prev().hide().end().show();
};

var printMessage = function (message) {
	$chats.append("<p class='chat' >"+ message + "</p>");
};

var noticeMeForJoin = function () {
	$notice
		.hide()
		.html("User joined! There are " + chat.get_user_count()  + "  user(s) online.")
		.fadeIn(400, function () {
			$notice.fadeOut(1000);
		});
};

var noticeMeForLeave = function () {
	$notice
		.hide()
		.html("User left! There are " + chat.get_user_count()  + "  user(s) online.")
		.fadeIn(400, function () {
			$notice.fadeOut(1000);
		});
};

$('#send').click(function (e) {
	e.preventDefault();
	var $content = $('#content');
	if ($content.val().replace(/\s/g, '') === '') {
		// Do nothing..
	} else {
		var d = new Date();
		var data = {
			content: "<span class='time'>" + d.toLocaleTimeString() + ": </span> <span class='text' >" + $content.val() + "</span>",
			id: timeStamp
		};
		chat.send(data);
		$chats.append("<p class='chat-me' >" + data.content + "</p>")
	}
	$content.val('');
});

})(window, jQuery);
