navigator.publishServer('Hello Lollish').then(function(server) {
	server.onfetch = function(event) {
		var html = '<h1>Hello Dottorblaster!</h1>' +
			'<h3>You requested: ' + event.request.url + '</h3>';
		var node = document.createElement("li");
		var textnode = document.createTextNode("Connection happened: " + event.request.method + " " + event.request.url);

		event.respondWith(new Response(JSON.stringify({response: 'stocazzo'}), {
			headers: {'Content-Type': 'application/json'}
		}));
		node.appendChild(textnode);
		document.body.appendChild(node);
		console.log(event);
	};
});
