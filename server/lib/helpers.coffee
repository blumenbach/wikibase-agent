CONFIG = require 'config'
{ whitelistedProperties } = CONFIG
editableProperties = Object.keys whitelistedProperties
wdk = require 'wikidata-sdk'
_ = require './utils'

builders =
  string: (str)-> "\"#{str}\""
  claim: (Q)->
    id = wdk.getNumericId Q
    "{\"entity-type\":\"item\",\"numeric-id\":#{id}}"

tests =
  string: (str)-> /\w/.test str
  claim: wdk.isWikidataId
  time: (year)-> /^\d{4}$/.test year.toString()
  monolingualtext: (valueObj)->
    { text, language } = valueObj
    return _.isNonEmptyString(text) and _.isNonEmptyString(language)
  quantity: (num)-> _.isNumber num

module.exports =
  whitelistedProperties:  whitelistedProperties 
  editableProperties:  editableProperties 
  builders:  builders 
  tests:  tests 
