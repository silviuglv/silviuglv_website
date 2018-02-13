var config = require('../../config')
var gulp = require('gulp')

var cssnano = require('cssnano')
var postcss = require('gulp-postcss')
var rename = require('gulp-rename')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var htmlmin = require('gulp-htmlmin')
var htmlreplace = require('gulp-html-replace')

gulp.task('optimize:styles', function () {
  var minify = [cssnano]

  return gulp.src(config.optimize.styles.src)
    .pipe(postcss(minify))
    .pipe(rename(config.optimize.styles.processors.rename))
    .pipe(gulp.dest(config.optimize.styles.dest))
})

gulp.task('optimize:scripts', function () {
  return gulp.src(config.optimize.scripts.src)
    .pipe(uglify(config.optimize.scripts.processors.uglify))
    .pipe(rename(config.optimize.scripts.processors.rename))
    .pipe(gulp.dest(config.optimize.scripts.dest))
})

gulp.task('optimize:images', function () {
  return gulp.src(config.optimize.images.src)
    .pipe(imagemin(config.optimize.images.processors.imagemin))
    .pipe(gulp.dest(config.optimize.images.dest))
})

gulp.task('optimize:html', function () {
  return gulp.src(config.optimize.html.src)
    .pipe(htmlreplace(config.optimize.html.processors.htmlreplace))
    .pipe(htmlmin(config.optimize.html.processors.htmlmin))
    .pipe(gulp.dest(config.optimize.html.dest))
})
