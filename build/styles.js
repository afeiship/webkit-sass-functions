(function() {

  'use strict';

  var gulp = require('gulp');
  var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'gulp.*', 'del']
  });

  //styles
  gulp.task('styles',function() {
    return gulp.src('src/**')
      .pipe($.concat('webkit-sass-functions.scss'))
      .pipe(gulp.dest('dist'));
  });

}());
