var gulp = require('gulp')
var runSequence = require('run-sequence')

// Build (gulp build:production)
gulp.task('build:production', function (callback) {
  runSequence(
    'clean',
    [
      'styles',
      'scripts',
      'images',
    ],
    'jekyll:production',
    [
      'optimize:styles',
      'optimize:images',
      'optimize:html'
    ],
    'optimize:scripts',
    callback
  )
})
