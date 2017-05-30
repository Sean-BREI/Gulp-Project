module.exports = function (gulp, plugins) {
	return function () {
		return gulp.src('./app/js/*.js')
			.pipe(plugins.foreach(function (stream, file) {
				return stream
					.pipe(plugins.uglify())
					.pipe(plugins.concat(file))
					.pipe(plugins.rename({
						suffix: '.min'
					}));
			}))
			.pipe(gulp.dest('./app/dist/js'));
	};
};