var express = require('express'),
  fs = require('fs'),
  expr = express(),
  https = require('https'),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

const DialogflowApp = require('actions-on-google').DialogflowApp;




expr.use(bodyParser.urlencoded({ extended: true }));
expr.use(bodyParser.json());


console.log('todo list RESTful API server started on: ' + port);


let postImage = function(req, res){
	console.log(req);
	console.log(res);
	res.set('Content-Type', 'application/json');
	res.set('Accept', 'application/json');
	res.setHeader('Content-Type', 'application/json');
	//const App = new DialogflowApp({request: req, response: res});
	var headersOpt = {
    	'Accept': 'application/json',  
	    "Content-Type": "application/json",
	};
	var bodyOpt = {  
	    "message": "hi"
	};
	var response = "text123";

	res.send(JSON.stringify({ "speech": response, "displayText": response
 //"speech" is the spoken version of the response, "displayText" is the visual version
 }));
	/*res.status(200).send(JSON.stringify(
	    {
	        method:'post',
	        url:'https://www.googleapis.com/urlshortener/v1/url', 
	        form: {name:'hello',age:25}, 
	        headers: headersOpt,
	        header: headersOpt,
	        body : JSON.stringify(bodyOpt),
	        json: true,
	    })
	); 
*/

	console.log("done");


	//App.tell("Hello from firebase");
}

let routes = function(app) {

  // todoList Routes
	expr.route('/action')
	.get(postImage)
	.post(postImage);
};

var credentials = {
      key: fs.readFileSync('./alice.pem', 'utf8'),
      cert: fs.readFileSync('./alice.crt', 'utf8')
}

var app = https.createServer(credentials, expr);
app.listen(port);
routes(app);