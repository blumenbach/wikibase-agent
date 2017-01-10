"use strict";

const request = require('request-promise');
const fs = require('fs');

const url = {
    url: 'http://localhost:4115/entity',
    json: true
};

const data = JSON.parse(fs.readFileSync('/tmp/labels-ids.json', 'utf8'));

const fn = function (item) {

    const hash = hashCode(JSON.stringify(item.body));
    const key = {
        key: hash
    };
    const summary = {
        summary: "importing data from mySQL (2016-11-04)"
    };
    extend(item.body, key);
    extend(item.body, summary);
    const opts = extend(url, item);

    return request.post(opts);
};

const actions = data.root.item.map(fn);
const results = Promise.all(actions);

results.then(data => console.log(data));

function extend(a, b){
    for(var key in b)
        if(b.hasOwnProperty(key))
            a[key] = b[key];
    return a;
}

function hashCode(str) {
    return str.split('').reduce((prevHash, currVal) =>
    ((prevHash << 5) - prevHash) + currVal.charCodeAt(0), 0);
}




