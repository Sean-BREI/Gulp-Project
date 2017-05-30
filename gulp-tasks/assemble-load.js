module.exports = function (gulp, plugins) {

	return function () {

		// https://github.com/assemble/assemble/issues/909
		gulp.assemble.layouts.onLoad(/\.hbs$/, function (view, next) {
			view.content = view.content.split('{{ body }}').join('{% body %}');
			next();
		});

		gulp.assemble.option('layout', 'default.hbs');

		gulp.assemble.helpers('./app/assemble/helpers/**/*.js');

		gulp.assemble.partials([
			'./app/assemble/includes/{,*/}*.hbs',
			'./app/assemble/modules/{,*/}*.hbs',
			'./app/assemble/partials/{,*/}*.hbs'
		]);

		gulp.assemble.layouts('./app/assemble/layouts/*.hbs');
		gulp.assemble.data('./app/assemble/fixtures/{,*/}*.json');
		gulp.assemble.pages('./app/assemble/{,*/}*.hbs');

	};

};