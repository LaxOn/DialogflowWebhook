var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);

let routes = function(app) {
	let controller = require('./controller.js');

  // todoList Routes
	app.route('/action')
		.post(controller.postImage)
};

routes(app);

let postImage = function(req, res){
	console.log(req);
	console.log(res);
}