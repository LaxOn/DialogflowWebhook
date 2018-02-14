

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  bodyParser = require('body-parser');

const DialogflowApp = require('actions-on-google').DialogflowApp;
  

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);



let postImage = function(req, res){
  const Dapp = new DialogflowApp({request: req, response: res});
  console.log(req);
  console.log(res);
  res.send(JSON.stringify({message: "hello"}));
  Dapp.tell("Hello from firebase");
}

let routes = function(app) {

  // todoList Routes
  app.route('/action')
  .get(postImage)
  .post(postImage);
};

routes(app);

