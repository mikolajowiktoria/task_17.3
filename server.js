var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();
var stringifyFile = '';
app.use(bodyParser.json());


app.get('/getNote', function(req, res) {
	
	fs.readFile(path.join(__dirname, './test.json'), 'utf8', function(err, data) {
    	if (err) throw err;
    	stringifyFile = data
    	res.send(data);
	});
});

app.post('/updateNote/:note', function(req, res) {
	stringifyFile += req.params.note;

	fs.writeFile(path.join(__dirname, './test.json'), stringifyFile, function(err) {
		if (err) throw err;
		console.log('plik nadpisany.');
	});
});

app.listen(3000);