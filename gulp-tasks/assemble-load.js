module.exports = function (gulp, plugins) {

	return function () {

		// https://github.com/assemble/assemble/issues/909
		gulp.assemble.layouts.onLoad(/\.hbs$/, function (view, next) {
			view.content = view.content.split('{{ body }}').join('{% body %}');
			next();
		});

		// Options
		gulp.assemble.options = {
			layoutdir: './app/assemble/layouts/',
			layout: 'default.hbs',
			collections: [
				{
					name: 'template',
					sortBy: 'title',
					sortorder: 'ascending'
				},
				{
					name: 'module',
					sortBy: 'title',
					sortorder: 'ascending'
				}
			]
		};

		// Helpers
		gulp.assemble.helpers('./app/assemble/helpers/**/*.js');

		// Partials (includes, modules and partials)
		gulp.assemble.partials([
			'./app/assemble/includes/{,*/}*.hbs',
			'./app/assemble/modules/{,*/}*.hbs',
			'./app/assemble/partials/{,*/}*.hbs'
		]);

		// Layouts
		gulp.assemble.layouts('./app/assemble/layouts/*.hbs');
		
		// Fixtures
		gulp.assemble.data('./app/assemble/fixtures/{,*/}*.json');

		// Pages
		gulp.assemble.pages('./app/assemble/{,*/}*.hbs');

	};

};