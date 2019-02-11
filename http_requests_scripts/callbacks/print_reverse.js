var https = require('https');   

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/reverse.html'
};

var getHTML = require("../http-functions.js");

function reverse (html) {
    console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, reverse);