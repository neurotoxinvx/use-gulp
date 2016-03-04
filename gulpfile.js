/*
* @author: Neurotoxin
* @desc: The gulp entry file.Don't change anything.
* @version: 0.0.1
* @date: 2016.03.04
*/

var gulp = require('gulp'),
	less = require('gulp-less'),
	minifyCss = require('gulp-minify-css'),
	uglify = require('gulp-uglify'),
	del = require('del'),
	runSequence = require('run-sequence');

gulp.task('clean', function(){
	del('dist');
});

var html = 'src/*.html';
gulp.task('copyhtml', function(){
	gulp.src(html)
		.pipe(gulp.dest('dist'));
});

var libs = 'src/libs/**/*.*';
gulp.task('copylibs', function(){
	gulp.src(libs)
		.pipe(gulp.dest('dist/libs'));
});

var img = ['src/images/*.jpg','src/images/**/*.jpg'];
gulp.task('copyimg', function(){
	gulp.src(img)
		.pipe(gulp.dest('dist/images'));
});

var css = ['src/css/*.*','src/css/**/*.*'];
gulp.task('lessmini', function(){
	gulp.src(css)
		.pipe(less())
		.pipe(minifyCss())
		.pipe(gulp.dest('dist/css'));
});

var js = ['src/js/*.js','src/js/**/*.*'];
gulp.task('uglifyjs', function(){
	gulp.src(js)
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', function(cb){
	runSequence('clean', ['copyhtml','lessmini','uglifyjs','copyimg','copylibs'], cb);
	console.log('----------任务完成----------');
});