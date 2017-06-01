var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

// Assemble
gulp.assemble = require('assemble')();

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
gulp.task('clean:dist', getTask('clean'));
gulp.task('assemble-load', getTask('assemble-load'));
gulp.task('assemble', getTask('assemble'));
gulp.task('compass', getTask('compass'));
gulp.task('postcss', getTask('postcss'));
gulp.task('scripts', getTask('scripts'));

gulp.task('build', [
	'clean:dist',
	'assemble-load',
	'assemble',
	'compass',
	'postcss',
	'scripts'
]);

gulp.task('default', [
	'build'
]);