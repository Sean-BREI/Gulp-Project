module.exports = function (gulp, plugins) {
	return function () {
		var autoprefixer = require('autoprefixer');
		var cssnano = require('cssnano');
		var stylelint = require('stylelint');
		return gulp.src('./app/css/main.css')
			.pipe(plugins.postcss([
				stylelint({
					failAfterError: true,
					reportOutputDir: './report',
					reporters: [
						{
							formatter: 'verbose',
							save: 'stylelint-report.text',
							console: true
						}
					],
					debug: true
				}),
				autoprefixer(),
				cssnano({
					autoprefixer: false
				})
			]))
			.pipe(plugins.rename({
				suffix: '.min'
			}))
			.pipe(gulp.dest('./app/dist/css'));
	};
};