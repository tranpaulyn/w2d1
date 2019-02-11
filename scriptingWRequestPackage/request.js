var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples')
    .on('error', function(err) {
        throw err;
    })
    .on('response', function(response) {
        console.log('Response Status Code: ', response.statusCode);
        console.log('Status Message: ', response.statusMessage);
        console.log('Content Type: ', response.headers['content-type']);
    })
    .on('end', function() {
        console.log('Downloading image...');
        console.log('Download complete.');
    })
    .pipe(fs.createWriteStream('./future.jpg'))





