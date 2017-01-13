// Generated by CoffeeScript 1.12.2
(function() {
  var americano, cors;

  americano = require('americano');

  cors = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    return next();
  };

  module.exports = {
    common: [
      americano.bodyParser(), americano.methodOverride(), americano.errorHandler({
        dumpExceptions: true,
        showStack: true
      }), cors
    ],
    development: [americano.logger('dev')],
    production: [americano.logger('short')]
  };

}).call(this);

//# sourceMappingURL=config.js.map