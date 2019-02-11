var https = require('https');   

var getHTML = require("./getHTML.js");

function printHTML(html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };


