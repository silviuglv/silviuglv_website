var browserSync = require('browser-sync')
var config = require('../../config').serve.development
var gulp = require('gulp')

gulp.task('serve', ['build'], function () {
  browserSync(config)
})
