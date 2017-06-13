/*
 * Helper links
 * https://github.com/assemble/assemble/tree/46a4fa8d362d0869ff8674f09e860f44d3fe8fae/support/docs/src/content/api
 * https://github.com/assemble/gulp-assemble/issues/29
 * https://github.com/assemble/assemble-core/issues/8
 */


module.exports = function (gulp, plugins) {

	return function () {

		// https://github.com/assemble/assemble/issues/909
		gulp.assemble.layouts.onLoad(/\.hbs$/, function (view, next) {
			view.content = view.content.split('{{ body }}').join('{% body %}');
			next();
		});

		gulp.assemble.preRender(/./, function (view, next) {
			view.data.pages = gulp.assemble.views.pages;
			next();
		});	

		gulp.assemble.helper('collection', function () {

			// console.log(arguments);

			var temp = {};
			var type = arguments[0];
			
			for (var key in this.pages) {
				if (this.pages.hasOwnProperty(key)) {
					if (this.pages[key].data[type]) {
						temp[key] = this.pages[key];
					}
				}
			}
		
			return temp;
		
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