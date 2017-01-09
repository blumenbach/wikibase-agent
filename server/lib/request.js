// Generated by CoffeeScript 1.12.2
(function() {
  var CONFIG, Promise, _, base, getToken, post, request, userAgent, wikidata;

  CONFIG = require('config');

  wikidata = CONFIG.wikidata;

  base = wikidata.base;

  getToken = require('wikidata-token')(wikidata);

  Promise = require('bluebird');

  request = Promise.promisifyAll(require('request'), {
    multiArgs: true
  });

  userAgent = require('./user_agent');

  _ = require('../lib/utils');

  module.exports = {
    post: function(action, form) {
      return getToken().then(post.bind(null, action, form));
    }
  };

  post = function(action, form, authData) {
    var cookie, params, token, url;
    cookie = authData.cookie, token = authData.token;
    form.token = token;
    url = _.buildUrl(base, {
      action: action,
      format: 'json'
    });
    if (form.data != null) {
      form.data = JSON.stringify(form.data);
    }
    params = {
      url: url,
      form: form,
      headers: {
        'Cookie': cookie,
        'User-Agent': userAgent
      }
    };
    _.log(params, 'post request params');
    return request.postAsync(params).spread(function(res, body) {
      var err;
      body = JSON.parse(res.body);
      if (body.error != null) {
        err = new Error('post err');
        _.extend(err, body);
        throw err;
      } else {
        return body;
      }
    });
  };

}).call(this);

//# sourceMappingURL=request.js.map
