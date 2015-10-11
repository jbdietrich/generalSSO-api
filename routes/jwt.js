var jwt   = require('jwt-simple'),
    util  = require('../lib/util');

exports.generate = function(req, res) {
  var jwtString = jwt.encode(req.body.payload, util.handleEmpty(req.body.meta.key) || ' '); // absent key, sign w/space to simulate 'wrong' key
  var url = 'https://' + util.handleEmpty(req.body.meta.hostname)
            + '/access/jwt?jwt=' + jwtString
            + '&return_to=' + util.handleEmpty(req.body.meta.return_to);

  res.end(JSON.stringify({ url: url }));
};
