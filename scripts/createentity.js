
const request = require('request');
const fs = require('fs');

const url = {
    url: 'http://localhost:4115/entity'
};

var data = JSON.parse(fs.readFileSync('/tmp/kerndaten-norm.json', 'utf8'));

const body = {
    json: true,
    body: {
        labels: {
            en: 'Sample2'
        },
        descriptions: {
            en: 'a sample'
        },
        claims: {
            P14: 'Q20'
        },
        summary: 'importing data from blablabla'
    }
};

const hash = hashCode(JSON.stringify(body));
const key = {
    key: hash
};
extend(body.body, key);
const opts = extend(url, body);

request.post(opts);

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



