module.exports = function (gulp, plugins) {
	return function () {
		return gulp.assemble.toStream('pages')
			.pipe(gulp.assemble.renderFile())
			.pipe(plugins.htmlmin())
			.pipe(plugins.extname())
			.pipe(gulp.assemble.dest('./app/dist'));
	}
};