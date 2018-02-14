var express = require('express'),
  fs = require('fs'),
  expr = express(),
  https = require('https'),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

const DialogflowApp = require('actions-on-google').DialogflowApp;


expr.use(bodyParser.urlencoded({ extended: true }));
expr.use(bodyParser.json());

var credentials = {
      key: fs.readFileSync('./alice.pem', 'utf8'),
      cert: fs.readFileSync('./alice.crt', 'utf8')
}

var app = https.createServer(credentials, expr);
app.listen(port);
console.log('todo list RESTful API server started on: ' + port);


expr.post('/action', function (req, res) {
/*
	let app = new DialogflowApp({request: request, response: response});


	function addNumber(app) {
		app = new DApp({request, response});
		let firstNum = parseInt(app.getArgument('firstNum'));
		let secondNum = parseInt(app.getArgument('secondNum'));
		app.tell("The answer is: " + (firstNum + secondNum));
	}


	const actionMap = new Map();
	actionMap.set("add", addNumber);
	app.handleRequest(actionMap);
	*/

	res.set('Content-Type', 'application/json');
	var response = "text123";
	res.send(JSON.stringify({ "speech": response, "displayText": response}));
});

expr.get('/action', function (req, res) {
	res.set('Content-Type', 'application/json');
	var response = "text123";
	res.send(JSON.stringify({ "speech": response, "displayText": response}));
});

