var ejs  = require('ejs'),
    fs   = require('fs'),
    path = require('path');

var templates = fs.readdirSync(path.join(__dirname, '../views'));

templates.forEach(function (tmplFile) {
  var content = fs.readFileSync(path.join(__dirname, '../views', tmplFile));
  var template = ejs.compile(content.toString());
  exports[tmplFile.slice(0, -4)] = template;
});
