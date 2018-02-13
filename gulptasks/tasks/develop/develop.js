var browserSync = require('browser-sync'),
    config      = require('../../config'),
    cp          = require('child_process'),
    gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserify  = require('browserify'),
    streamify   = require('gulp-streamify'),
    source      = require('vinyl-source-stream'),
    changed     = require('gulp-changed');


// Jekyll (gulp jekyll)
gulp.task('jekyll', function (done) {
  browserSync.notify('Rebuilding Jekyll&hellip;')

  return cp.spawn(
    'bundle',
    [
      'exec',
      'jekyll',
      'build',
      '-q',
      '--source=' + config.jekyll.development.src,
      '--destination=' + config.jekyll.development.dest,
      '--config=' + config.jekyll.development.config
    ],
    {
      stdio: 'inherit'
    }
  )
  .on('close', done)
});


gulp.task('styles', function (done) {
    return gulp.src(config.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(config.styles.dest))
});


gulp.task('scripts', function(done) {
    var bundleStream = browserify(config.scripts.bundleConfigs.entries).bundle()

    bundleStream
      .pipe(source(config.scripts.bundleConfigs.outputName))
      .pipe(gulp.dest(config.scripts.bundleConfigs.dest))
      done();
});


gulp.task('images', function () {
  browserSync.notify('Rebuilding Images&hellip;')

  return gulp.src(config.images.src)
    .pipe(changed(config.images.dest))
    .pipe(gulp.dest(config.images.dest))
});
