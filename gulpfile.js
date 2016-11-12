const gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require("browserify"),
    watchify = require("watchify"),
    babelify = require('babelify'),
    reactify = require('reactify'),
    stylus = require("gulp-stylus"),
    nib = require("nib"),
    gulpIf = require("gulp-if"),
    gulpStreamify = require("gulp-streamify"),
    gulpUglify = require("gulp-uglify"),
    gulpUtil = require("gulp-util"),
    source = require("vinyl-source-stream"),
    browserifyLivescript = require('browserify-livescript'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'public',
    livereload: true,
    port: 1888
  });
});

gulp.task('watch', function () {
  gulp.watch(['./public/*.html'], ['html']);
  gulp.watch(['./public/**/*.ls'], ['build:scripts']);
  gulp.watch(['./public/**/*.styl'], ['build:styles']);
});

gulp.task('html', function () {
  gulp.src('./public/*.html')
    .pipe(connect.reload());
});

gulp.task('build:styles', function(){
  gulp.src('./public/*.styl')
    .pipe(stylus({
        compress: false,
        "include css": true,
        use: nib()
    }))
    .pipe(gulp.dest("./public/"))
    .pipe(connect.reload());
});

// :: [String] -> Bundler
var createBundler = function(entries){
   bundler = browserify(Object.assign({}, watchify.args, {
       debug: true
   }))
   bundler.add(entries)
   bundler.transform('browserify-livescript')
   bundler.transform(babelify, {presets: ["es2015", "react", "stage-2"]})
   bundler.transform(reactify)
   return bundler
}

// :: Bundler -> {file :: String, directory :: String} -> IO()
var bundle = function(bundler, output){
  process.env.NODE_ENV = 'development';
  return bundler.bundle()
       .on("error", function(){
           return gulpUtil.log(arguments)
       })
       .pipe(gulpIf(false, gulpStreamify(gulpUglify())))
       .pipe(source(output.file))
       //.pipe(gulpStreamify(gulpUglify()))
       .pipe(gulp.dest(output.directory))
}

indexJsBundler = createBundler("./public/index.ls")
indexJsBuilt = {
   directory: "./public", 
   file: "index.min.js"
}

gulp.task("build:scripts", function(){
   bundle(indexJsBundler, indexJsBuilt)
    .pipe(connect.reload());
})


gulp.task('default', ['build:scripts', 'build:styles', 'connect', 'watch']);