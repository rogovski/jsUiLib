var Promise = require('bluebird');
var $ = require('jquery');

function bindTo(obj) {
    return Promise.bind(obj);
}

function getJsonAsync(url) {
    return Promise.resolve($.ajax({
        url: url,
        dataType: 'JSON',
        type: 'GET'
    }));
}

function getJsonNoCacheAsync(url) {
    return Promise.resolve($.ajax({
        url: url,
        dataType: 'JSON',
        cache: false,
        type: 'GET'
    }));
}

function postJsonAsync(url, data) {
    return Promise.resolve($.ajax({
        url: url,
        dataType: 'JSON',
        type: 'POST',
        data: data
    }));
}


var ajax = { };

ajax.bindTo = bindTo;
ajax.getJsonAsync = getJsonAsync;
ajax.getJsonNoCacheAsync = getJsonNoCacheAsync;
ajax.postJsonAsync = postJsonAsync;

module.exports = ajax;