#! /usr/bin/env node

var fs = require('fs');
var util = require('./util');

var argv = process.argv.slice(2);
var basePath = process.cwd();
if (!/\\$/.test(basePath)) {
    basePath += '\\';
}

switch (argv[0]) {
    case 'ip': {
        console.log(util.getIp());
        util.wait(3);
    }
    case 'urldec': {
        if (!argv[1]) {
            break;
        }
        var path = basePath + argv[1];
        var content = fs.readFileSync(path).toString();
        content = decodeURIComponent(content);
        if (argv[2]) {
            fs.writeFileSync(basePath + argv[2], content);
        }
        else {
            console.log(content);
        }
    }
}