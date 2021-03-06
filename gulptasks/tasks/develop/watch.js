var browserSync = require('browser-sync')
var config = require('../../config').watch
var gulp = require('gulp')

gulp.task('watch:jekyll', ['jekyll'], browserSync.reload)
gulp.task('watch:styles', ['styles'])
gulp.task('watch:scripts', ['scripts'])
gulp.task('watch:images', ['images'], browserSync.reload)


gulp.task('watch', ['serve'], function () {
  gulp.watch(config.jekyll, ['watch:jekyll'])
  gulp.watch(config.styles, ['watch:styles'])
  gulp.watch(config.scripts, ['watch:scripts'])
  gulp.watch(config.images, ['watch:images'])
  //gulp.watch(config.icons, ['watch:icons'])
  //gulp.watch(config.favicons, ['watch:favicons'])
})
