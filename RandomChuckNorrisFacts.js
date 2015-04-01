var http = require('http'),
      iconv = require('iconv-lite'),
      Promise = require('promise');

var url = 'http://www.chucknorris.com.br/p.php';

var RandomChuckNorrisFacts = function() {
	this.random = function(callback) {
		requestFact().then(sanitize).done(callback);
	};

	var requestFact = function(resolve) {
		return new Promise(function(resolve) {
			http.get(url, function(req) {
				var body = '';

				req.on('data', function(data) {
					body += iconv.decode(data, 'ISO-8859-1');
				});

				req.on('end', function() {
					resolve(body);
				});
			});
		});
	};

	var sanitize = function(body) {
		return new Promise(function(resolve) {
			var regexp = new RegExp(/\<div align\=\"left\"[^\>]+\>(.+)\<\/div\>/);
			var match = regexp.exec(body);
			var fact = match[1];
			fact = fact.replace(/\<[^>]+\/?\>/g, '');
			fact = fact.replace(/\&nbsp\;/g, '');
			resolve(fact);
		});
	}
};

module.exports = RandomChuckNorrisFacts;
