var gulp = require('gulp'),
    runSequence = require('run-sequence')


gulp.task('build', function (callback) {
  runSequence(
    'clean',
    [
      'styles',
      'scripts',
      'images'
    ],
    'jekyll',
    callback
  )
})
