var express = require ('express');
var app = express();
var bodyparser = require ('body-parser');
// var router = express.Router();
var morgan = require('morgan');
const PORT = 8080;
const models = require('./models');
const route = require("./routes");
const nunjucks = require("nunjucks");

	app.listen(PORT);
console.log('Listening on ' + PORT);

app.engine('html', nunjucks.render);
app.set('view engine', "html");
nunjucks.configure('views', {noCache:true});


app.use(morgan('short'));

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({default: true}));

app.use("/", route)
// // app.get('/', function(req, res, next){
// 	res.send('Welcome to the Homepage!');
// }, function(next){});

app.use(function (err, req, res, next){
	res.status(err.status || 500);
	console.error(err);
	res.send (err.status);
});

app.use(express.static(__dirname + '/public'));

