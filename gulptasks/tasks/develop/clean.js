var config = require('../../config').clean,
    del    = require('del'),
    gulp   = require('gulp')


gulp.task('clean', function () {
  del.sync([config.src])
})
