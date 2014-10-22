var port = 2020;

var express = require("express"),
	exphbs = require("express-handlebars"),
	mysql = require("mysql"),
	d3 = require("d3");

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.logger('dev'))

app.use(express.static(__dirname + '/public'))
app.use(express.urlencoded() );

app.get('/', function (req, res) {
    res.render('home', {
    });

});



app.listen(port);
console.log("visualizer is running at 127.0.01:"+port+".")

