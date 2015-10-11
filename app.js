var express    = require('express'),
    favicon    = require('serve-favicon'),
    logger     = require('morgan'),
    bodyParser = require('body-parser'),
    jwt        = require('./routes/jwt'),
    saml       = require('./routes/saml'),
    logout     = require('./routes/logout'),
    http       = require('http'),
    path       = require('path');

var app = express();

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon('./public/images/tso.ico'));
app.use(logger());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.post('/jwt', jwt.generate);
app.post('/saml', saml.generate);
app.get('/logout', logout.display);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
