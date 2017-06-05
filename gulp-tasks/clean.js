// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
module.exports = function (gulp, plugins) {
	
	return function () {

		var del = require('del');

		del([
			'./app/.tmp',
			'./app/dist/*',
			'!./app/dist/.git',
			'./app/*.html',
			'./app/modules/*.html'
		], { dot: true });

	};

};