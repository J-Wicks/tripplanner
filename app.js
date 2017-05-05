var express = require ('express');
var app = express();
var bodyparser = require ('body-parser');
// var router = express.Router();
var morgan = require('morgan');
const PORT = 8080;
const models = require('./models');


	app.listen(PORT);
console.log('Listening on ' + PORT);


app.use(morgan('short'));

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({default: true}));


app.get('/', function(req, res, next){
	res.send('Welcome to the Homepage!');
}, function(next){});

app.use(function (err, req, res, next){
	res.status(err.status || 500);
	console.error(err);
	res.send (err.status);
});

app.use(express.static(__dirname + '/public'));

