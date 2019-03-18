const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

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
  gulp.watch('public/js/*.js').on('change', browserSync.reload);
  gulp.watch('public/*.html').on('change', browserSync.reload);
  gulp.watch('public/css/*.css').on('change', browserSync.reload);
  browserSync.init({
    server: {
        baseDir: "./public"
    }
  });
  done();
})
gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./public"
      }
  });
});