module.exports = function (gulp, plugins) {

	return function () {

		var reload = gulp.browserSync.reload;

		// gulp.watch([
		// 	'./app/assemble/modules/*.hbs',
		// 	'./app/assemble/partials/*.hbs',
		// 	'./app/assemble/includes/*.hbs',
		// 	'./app/assemble/layouts/*.hbs',
		// 	'./app/assemble/*.hbs',
		// 	'./app/assemble/**/*.json'
		// ], ['assemble']).on('change', reload);

		// gulp.watch(['./app/**/*.html']).on('change', reload);

		gulp.watch([
			'./app/sass/**/*.{scss,sass}',
			'./app/sass/modules/_assemble-modules.scss',
			'./app/sass/partials/_assemble-partials.scss',
			'./app/sass/templates/_assemble-templates.scss'
		], ['compass']).on('change', reload);

		gulp.watch('./app/js/**/*.js', ['scripts']).on('change', reload);

		gulp.watch(['./app/img/**/*'], reload);		
		
	};

};