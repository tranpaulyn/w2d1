var https = require('https');   

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step6/lowercase.html'
};

var getHTML = require("../http-functions.js");

function printLowerCase (html) {
    console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);