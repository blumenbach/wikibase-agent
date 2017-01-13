module.exports =
  host: '0.0.0.0'
  port: 4115
  wikidata:
    base: "http://w.b-ol.de/w/api.php"
    username: 'customize'
    password: 'customize'
  whitelistedProperties:
    P7: 'string', #CERL ID
    P14: 'claim',
    P16: 'claim', #has collection
    P28: 'string',
    P46: 'claim' #has donator
