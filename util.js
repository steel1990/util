exports.getIp = require('ipaddr').getIp;

exports.wait = function (second) {
    setTimeout(function(){
        console.log('wait end');
    }, second * 1000);
};