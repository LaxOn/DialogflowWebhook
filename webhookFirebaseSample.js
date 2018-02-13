const functions = require('firebase-functions');
const App = require('actions-on-google').DialogflowApp;
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {


	function addNumber(app) {
		let app = new App({request, response});
		let firstNum = parseInt(app.getArgument('firstNum'));
		let secondNum = parseInt(app.getArgument('secondNum'));
		app.tell("The answer is: " + (firstNum + secondNum));
	}

	function multNumber(app) {
		let app = new App({request, response});
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
