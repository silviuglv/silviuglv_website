var src = 'source/'
var srcAssets = 'source/_assets/'
var build = 'build/'
var development = 'build/development/'
var developmentAssets = 'build/assets/'
var production = 'build/production/'
var productionAssets = 'build/production/assets/'


module.exports = {
  watch: {
    jekyll: [
      '_config.yml',
      '_config.production.yml',
      src + '_data/**/*',
      src + '_includes/**/*',
      src + '_layouts/**/*',
      src + '_plugins/**/*',
      src + '_posts/**/*',
      src + '/**/*.{html,markdown,md,yml,json,txt,xml}',
      src + '/*'
    ],
    styles: srcAssets + '/css/**/*',
    scripts: srcAssets + '/scripts/**/*',
    images: srcAssets + '/img/**/*',
    icons: srcAssets + '/icons/**/*',
    favicons: srcAssets + '/favicons/**/*'
  },
  clean: {
    src: developmentAssets
  },
  build: {},
  jekyll: {
    development: {
      src: src,
      dest: development,
      config: '_config.yml'
    },
    production: {
      src: src,
      dest: production,
      config: '_config.yml'
    }
  },
  styles: {
    src: srcAssets + 'css/main.scss',
    dest: developmentAssets + 'css/'
  },
  serve: {
    development: {
      server: {
        baseDir: [development, build, src]
      },
      files: [
        developmentAssets + '/css/*.css',
        developmentAssets + '/scripts/*.js',
        developmentAssets + '/images/**',
        developmentAssets + '/icons/**',
        developmentAssets + '/favicons/*'
      ],
      notify: {
        styles: ['display: hidden; padding: 12px; font-family: sans-serif; position: fixed; font-size: 14px; z-index: 10000; left: 0; bottom: 0; width: 200px; margin: 0; border-top-left-radius: 0; border-top-right-radius: 3px; color: #fff; text-align: center; background-color: rgba(0, 0, 0, 0.75);']
      }
    },
    production: {
      server: {
        baseDir: [production]
      }
    }
  },
  scripts: {
    debug: true,
    bundleConfigs: {
      entries: srcAssets + 'scripts/main.js',
      dest: developmentAssets + 'scripts/',
      outputName: 'main.js'
    }
  },
  images: {
    src: srcAssets + 'img/**/*',
    dest: developmentAssets + 'img/'
  },
  optimize: {
    styles: {
      src: developmentAssets + '/css/*.css',
      dest: productionAssets + '/css/',
      processors: {
        rename: {
          suffix: '.min'
        }
      }
    },
    scripts: {
      src: developmentAssets + 'scripts/*.js',
      dest: productionAssets + 'scripts/',
      processors: {
        rename: {
          suffix: '.min'
        },
        uglify: {}
      }
    },
    images: {
      src: developmentAssets + '/img/**/*.{jpg,jpeg,png,gif,svg}',
      dest: productionAssets + '/img/',
      processors: {
        imagemin: {
          optimizationLevel: 3,
          progessive: true,
          interlaced: true,
          svgoPlugins: [{
            removeViewBox: false
          }]
        }
      }
    },
    html: {
      src: production + '/**/*.html',
      dest: production,
      processors: {
        htmlmin: {
          collapseWhitespace: true
        },
        htmlreplace: {
          styles: {
            src: '/assets/css/',
            tpl: '<link rel="stylesheet" href="%smain.min.css">'
          },
          scripts: {
            src: '/assets/scripts/',
            tpl: '<script src="%smain.min.js"></script>'
          }
        }
      }
    }
  }
}
