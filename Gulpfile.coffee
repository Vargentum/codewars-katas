gulp = require 'gulp'
$ = require('gulp-load-plugins')()
coffeeLintStylish = require 'coffeelint-stylish'
jasmineReporters = require 'jasmine-reporters'
jshintStylish = require 'jshint-stylish'
config = require './config.json'


gulp.task 'coffee', ->
  gulp.src './src/**/*.coffee'
    .pipe($.plumber())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter(coffeeLintStylish))
    .pipe($.sourcemaps.init())
    .pipe($.coffee())
    .pipe($.sourcemaps.write())
    .pipe($.concat('coffeescript.js'))
    .pipe(gulp.dest('./app'))
    .pipe($.livereload())


gulp.task 'javascript', ->
  gulp.src './src/**/*.js'
    .pipe($.plumber())
    .pipe($.jshint(
      eqeqeq: on
      esnext: on
      curly: on
      asi: on  # disable semicolons varning
    ))
    .pipe($.jshint.reporter(jshintStylish))
    .pipe($.sourcemaps.init())
    .pipe($.babel(
      presets: ['es2015']
    ))
    .pipe($.sourcemaps.write())
    .pipe($.concat('javascript.js'))
    .pipe(gulp.dest('./app'))
    .pipe($.livereload())



gulp.task 'coffee-test', ->
  gulp.src './spec/**/*.coffee'
    .pipe($.plumber())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter(coffeeLintStylish))
    .pipe($.coffee())
    .pipe($.concat('appSpec.js'))
    .pipe(gulp.dest('./spec'))


gulp.task 'jasmine-test', ->
  gulp.src ['./src/**/*.coffee', './spec/**/*.coffee']
    .pipe($.jasmineBrowser.specRunner())
    .pipe($.jasmineBrowser.server())


gulp.task 'watch', ->
  $.livereload.listen(
    quiet: on
    port: config.livereload.port
    host: config.livereload.host
  )

  $.watch('./src/**/*.coffee', $.batch (cb) ->
    gulp.start('coffee')
    cb()
  )
  $.watch('./src/**/*.js', $.batch (cb) ->
    gulp.start('javascript')
    cb()
  )
  # $.watch('./spec/**/*.coffee', $.batch (cb) ->
  #   gulp.start('coffee-test')
  #   gulp.start('jasmine-test')
  #   cb()
  # )





gulp.task 'server',  ->
  gulp.src 'app'
    .pipe($.webserver(
      port: config.server.port
      host: config.server.host
    ))


gulp.task 'default', [
  'javascript'
  'coffee'
  # 'coffee-test'
  # 'jasmine-test'
  'watch'
  'server'
]