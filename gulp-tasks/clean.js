// https://github.com/gulpjs/gulp/blob/master/docs/recipes/delete-files-folder.md
module.exports = function (gulp, plugins) {
	return function () {
		var del = require('del');
		var vinylPaths = require('vinyl-paths');
		return gulp.src('./app/dist/*')
			.pipe(vinylPaths(del))
			.pipe(plugins.stripDebug())
			.pipe(gulp.dest('./app/dist'));
	};
};