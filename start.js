var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);



let postImage = function(req, res){
	console.log(req);
	console.log(res);
}

let routes = function(app) {

  // todoList Routes
	app.route('/action')
		.post(postImage);
};

routes(app);
