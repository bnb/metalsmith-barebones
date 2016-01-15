var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var del = require('del');

// Upload to gh-pages branch
gulp.task('send', function() {
  return gulp.src('./build/**/*')
    .pipe(ghPages());
});

//Remove everything from the build/ folder.
gulp.task('clean', function() {
  return del('./build/**/*');
});

// Send stuff to gh-pages and clean image html files.
gulp.task('deploy', ['clean', 'send']);
