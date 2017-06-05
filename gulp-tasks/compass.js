module.exports = function (gulp, plugins) {

	return function () {

		return gulp.src('./sass/main.scss')
			.pipe(plugins.compass({
				config_file: './config.rb',
				css: 'css',
				sass: 'sass'
			}));

	};

};