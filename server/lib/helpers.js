// Generated by CoffeeScript 1.12.2
(function() {
  var CONFIG, _, builders, editableProperties, tests, wdk, whitelistedProperties;

  CONFIG = require('config');

  whitelistedProperties = CONFIG.whitelistedProperties;

  editableProperties = Object.keys(whitelistedProperties);

  wdk = require('wikidata-sdk');

  _ = require('./utils');

  builders = {
    string: function(str) {
      return "\"" + str + "\"";
    },
    claim: function(Q) {
      var id;
      id = wdk.getNumericId(Q);
      return "{\"entity-type\":\"item\",\"numeric-id\":" + id + "}";
    },
    time: function(year) {
      var data;
      data = {
        time: "+" + year + "-00-00T00:00:00Z",
        timezone: 0,
        before: 0,
        after: 0,
        precision: 9,
        calendarmodel: "http://www.wikidata.org/entity/Q1985727"
      };
      return JSON.stringify(data);
    }
  };

  tests = {
    string: function(str) {
      return /\w/.test(str);
    },
    claim: wdk.isWikidataId,
    time: function(year) {
      return /^\d{4}$/.test(year.toString());
    },
    monolingualtext: function(valueObj) {
      var language, text;
      text = valueObj.text, language = valueObj.language;
      return _.isNonEmptyString(text) && _.isNonEmptyString(language);
    },
    quantity: function(num) {
      return _.isNumber(num);
    }
  };

  module.exports = {
    whitelistedProperties: whitelistedProperties,
    editableProperties: editableProperties,
    builders: builders,
    tests: tests
  };

}).call(this);

//# sourceMappingURL=helpers.js.map