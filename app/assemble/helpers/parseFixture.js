module.exports = {
	/* PARSE FIXTURE DATA
	 * @param path string - pass in the name of the JSON fixture file in assemble/fixtures/
	 * @options ??
	 *
	 */
	parseFixture: function (path, options) {
		if (!path || typeof path !== 'string') { return false; }

		var fs = require('fs');
		var nodePath = require('path');
		var fixture;

		path = nodePath.join(__dirname, '../fixtures/' + path);

		try {
			fixture = fs.readFileSync(path);
			fixture = fixture.toString('utf8');
			fixture = JSON.parse(fixture);
		} catch (err) {
			return console.error(err);
		}

		return options.fn(fixture);
	}
};