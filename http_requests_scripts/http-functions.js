var https = require('https');   

var getHTML = require("./getHTML.js");

function printHTML(html) {
    console.log(html);
}

var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step5.html'
  };


module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
                    // console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
                    console.log(chunk);
                   callback(chunk); 
                });
  });
}