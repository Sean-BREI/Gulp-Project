module.exports = function (gulp, plugins) {

	return function () {

		gulp.browserSync({
			server: {
				baseDir: ['.tmp', 'app']
			},
			reloadDebounce: 1000,
			reloadDelay: 1000,
			port: 3000
		});

	};

};