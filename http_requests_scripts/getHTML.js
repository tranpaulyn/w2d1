var requestOptions = {
    host: 'syntantris.github.io',
    path: '/http-examples/step4.html'
};

var https = require('https');   


function getHTML (options, callback) {

    https.get(options, function (response) {
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
                    // console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
                    console.log(chunk.toString());
                });
  
  });
}

function printHTML (html) {
    console.log(html);
}

getHTML(requestOptions, printHTML);

module.exports = function getHTML (options, callback) {
    https.get(options, function (response) {
        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
                    // console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
                    console.log(chunk.toString());
                });
  
  });
}