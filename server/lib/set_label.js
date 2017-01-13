// Generated by CoffeeScript 1.12.2
(function() {
  var _, post;

  post = require('./request').post;

  _ = require('./utils');

  module.exports = function(entity, language, label) {
    return post('wbsetlabel', {
      id: entity,
      language: language,
      value: label,
      assert: 'user'
    }).then(_.Log('wbsetlabel body'));
  };

}).call(this);

//# sourceMappingURL=set_label.js.map