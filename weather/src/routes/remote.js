var superagent = require('superagent');

module.exports = function(url, res) {
	superagent.get(url).end(function(request, response){
		console.log(response.text);
		res.send(response.text);
	});
}
