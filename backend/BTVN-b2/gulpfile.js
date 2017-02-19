const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const jshint = require('gulp-jshint');
const csslint = require('gulp-csslint');

gulp.task('default', ['check', 'run-app']);

//task1
gulp.task('run-app', (callback)=>{
  return nodemon({
    script: 'app.js'
  }).on('start', (callback)=>{
    callback();
  });
});


//task2
gulp.task('check', ()=>{
  gulp.watch('test/*.js', ['check-fail-js']);
  gulp.watch('test/*.css', ['check-fail-css']);
});
gulp.task('check-fail-js', ()=>{
  console.log('=========================');
  return gulp.src('test/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
gulp.task('check-fail-css', () =>{
  console.log('=========================');
  return gulp.src('test/*.css')
    .pipe(csslint())
    .pipe(csslint.formatter());
});
