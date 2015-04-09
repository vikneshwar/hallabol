var request = require('request');

// target url
var target = '';

var count = 0;
function run () {
  console.log('working...');
  request.post({ url: target, form: {name: 'qwertyuio'} },
    function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body);
        count++;
        console.log('COUNT:', count);
        run();
      } else {
        console.log('got error', error);
      }
    }
  );
}

run();
