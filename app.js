var express    = require('express'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    jwt        = require('./routes/jwt'),
    saml       = require('./routes/saml'),
    http       = require('http');

var app = exports.app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/jwt', jwt.generate);
app.post('/saml', saml.generate);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
