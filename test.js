var request = require('request');

var options = {
  uri: 'http://maden.kr:3000/insert',
  method: 'GET',
  json: {
    "reqData": {
      "user": {
        "id": "jsonTest",
        "pwd": "111"
      }
    }
  }
};

request(options, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body.id); // Print the shortened url.
  }
  console.log(error);
  console.log(response);
    //console.log(body);
});