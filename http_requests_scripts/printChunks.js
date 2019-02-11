function getAndPrintHTMLChunks () {

    var https = require('https');   

    var requestOptions = {
      host: 'sytantris.github.io',
      path: '/http-examples/step1.html'
    };
  
    /* Add your code here */
    https.get(requestOptions, function (response) {

        // set encoding of received data to UTF-8
        response.setEncoding('utf8');

        response.on('data', function(chunk) {
                    // console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
                    console.log(chunk.toString());
                });
  
  });
}

getAndPrintHTMLChunks();