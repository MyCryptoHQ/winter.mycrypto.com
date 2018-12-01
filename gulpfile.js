"use strict";
var fs           = require('fs')

var autoprefixer = require('gulp-autoprefixer')
var gulpConcat   = require('gulp-concat')
var cssnano      = require('gulp-cssnano')
var fileinclude  = require('gulp-file-include')
var gulp         = require('gulp')
var sass         = require('gulp-sass');
var notify       = require('gulp-notify')
var plumber      = require('gulp-plumber' )
var rename       = require('gulp-rename')
var uglify       = require('gulp-uglify')
var sourcemaps   = require('gulp-sourcemaps')
sass.compiler = require('node-sass');


var src          = './src/'
var dst          = './'


// Error / Success Handling
var onError = function(err) {
  notify.onError({
    title:    "Error: " + err.plugin,
    subtitle: "<%= file.relative %>",
    message:  "<%= error.message %>",
    sound:    "Beep",
  })(err);
  console.log(err.toString())
  this.emit('end');
}

function onSuccess(msg) {
  return {
    //message:   msg + " Complete! ",
    //onLast:    true
  }
}

// HTML / TPL Pages
var htmlFiles = src + 'layouts/*.html'
var tplFiles  = src + 'includes/*.tpl'

gulp.task('pages', function () {
 return gulp.src( htmlFiles )
   .pipe( plumber     ({ errorHandler: onError           }))
   .pipe( fileinclude ({ prefix: '@@', basepath: '@file' }))
   .pipe( gulp.dest   (  dst                              ))
   .pipe( notify      (  onSuccess('HTML')                ))
})


// styles: Compile and Minify scss / CSS Files
const style_watchFolder = src  + 'styles/**/*.scss'
const style_srcFile     = src  + 'styles/mycryptowinter.scss'
const style_distFile    = dst  + 'styles/mycryptowinter.min.css'

gulp.task('styles', function() {
  return gulp.src( style_srcFile )

    .pipe(         sass().on('error', sass.logError))
    .pipe( autoprefixer({     browsers: ['last 4 versions', 'iOS > 7'], remove: false }) )
    .pipe(      cssnano({ autoprefixer: false, safe: true                             }) )
    .pipe(       rename(                style_distFile                                )  )
    .pipe(sourcemaps.write())
    .pipe( gulp.dest( dst ) )
})


/* Concat & Uglify JS */
var js_watchFolder   = src  + 'scripts/**/*.js'
var js_distFolder    = dst  + 'scripts'
var js_distFile      =        'mycryptowinter.js'
var js_distFileMin   =        'mycryptowinter.min.js'

gulp.task('scripts', function() {
  return gulp.src( js_watchFolder )
    .pipe( plumber          ({ errorHandler: onError }))
    .pipe( sourcemaps.init  (                         ))
    .pipe( gulpConcat       (  js_distFile            ))
    .pipe( gulp.dest        (  js_distFolder          ))
    .pipe( uglify           (                         ))
    .pipe( rename           (  js_distFileMin         ))
    .pipe( sourcemaps.write (  '/maps'                ))
    .pipe( gulp.dest        (  js_distFolder          ))
    .pipe( notify           (  onSuccess('JS' )       ))
});

// Copy
var imgSrcFolder  = src + 'images/**/*'
var fontSrcFolder = src + 'fonts/*.*'
gulp.task('copy', function() {
 gulp.src ( imgSrcFolder )
     .pipe( gulp.dest( dst + 'images' ))

 gulp.src ( fontSrcFolder )
     .pipe( gulp.dest( dst + 'fonts'  ))

 .pipe( notify ( onSuccess(' Copy ' )))
})


// Watch Tasks
gulp.task('watchScripts',       function() { gulp.watch( js_watchFolder,     ['scripts' ])})
gulp.task('watchStyles',        function() { gulp.watch( style_watchFolder,  ['styles' ]) })
gulp.task('watchLayouts',       function() { gulp.watch( htmlFiles,          ['pages'  ]) })
gulp.task('watchIncludes',      function() { gulp.watch( tplFiles,           ['pages'  ]) })

gulp.task('watch',             ['watchScripts' , 'watchStyles', 'watchLayouts', 'watchIncludes' ])

gulp.task('build',             ['scripts', 'pages', 'styles', 'copy'])

gulp.task('default',           ['build', 'watch'])
