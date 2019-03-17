const gulp = require('gulp');
const sass = require('gulp-sass');

// compile the files into main.css
gulp.task('styles', function () {
  return gulp.src('src/scss/main.scss')
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sass({ "bundleExec": true }))
    .pipe(gulp.dest('src'));
});
// watch the changes on the scss folder. If changes are made, execute the styles command
gulp.task('watch', function(done) {
  gulp.watch('src/scss/*.scss', gulp.series('styles'));
  done();
})