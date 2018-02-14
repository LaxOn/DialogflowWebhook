const functions = require('firebase-functions');
const DApp = require('actions-on-google').DialogflowApp;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var helloWorld = functions.https.onRequest((request, response) => {
	let app;


	function addNumber(app) {
		app = new DApp({request, response});
		let firstNum = parseInt(app.getArgument('firstNum'));
		let secondNum = parseInt(app.getArgument('secondNum'));
		app.tell("The answer is: " + (firstNum + secondNum));
	}

	function multNumber(app) {
		app = new DApp({request, response});
		let firstNum = parseInt(app.getArgument('firstNum'));
		let secondNum = parseInt(app.getArgument('secondNum'));
		app.tell("The answer is: " * (firstNum + secondNum));
	}

	const actionMap = new Map();

	 //action and function
	actionMap.set('add', addNumber);
	actionMap.set('multiply', multNumber);
	app.handleRequest(actionMap)



	//app.tell("Hello from firebase");

	//app.ask - leave mic open
	//app.tell - close it
	//response.send("Hello from Firebase!");
});



var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

const App = require('actions-on-google').DialogflowApp;
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);


let routes = function(app) {

  // todoList Routes
	app.route('/action')
	.get(helloWorld)
	.post(helloWorld);
};

routes(app);

