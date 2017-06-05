var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// Assemble
gulp.assemble = require('assemble')();

// Browsersync
gulp.browserSync = require('browser-sync');

/*
 * @name getTask
 * @function
 * @access public
 * @param {String} task
 * @return {Function}
 */
var getTask = function getTask(task) {
	return require('./gulp-tasks/' + task)(gulp, plugins);
};

// Tasks
gulp.task('assemble-load', getTask('assemble-load'));
gulp.task('assemble', getTask('assemble'));
gulp.task('browser-sync', getTask('browser-sync'));
gulp.task('clean', getTask('clean'));
gulp.task('compass', getTask('compass'));
gulp.task('postcss', getTask('postcss'));
gulp.task('scripts', getTask('scripts'));
gulp.task('watch', getTask('watch'));

gulp.task('build', [
	'clean',
	'assemble-load',
	'assemble',
	'compass',
	'postcss',
	'scripts'
]);

gulp.task('serve', [
	'assemble-load',
	'assemble',
	'browser-sync',
	'watch'
]);

gulp.task('default', [
	'build'
]);