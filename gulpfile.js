var gulp = require("gulp"),
    connect = require("gulp-connect"),
    livereload = require("gulp-livereload"),
    watch = require("gulp-watch"),
    gulpUglify = require("gulp-uglify"),
    stylus = require("gulp-stylus"),
    nib = require("nib"),
    watchify = require("watchify"),
    browserify = require("browserify"),
    gulpIf = require("gulp-if"),
    config = require("./config/config.js"),
    babel = require("gulp-babel"),
    gulpUtil = require("gulp-util"),
    gulpStreamify = require("gulp-streamify"), 
    source = require("vinyl-source-stream"),
    babelify = require('babelify'),
    reactify = require('reactify'),
    underscore = require("underscore");

gulp.task("dev:server", function() {
  connect.server({
    port: config.F_port,
    root: "public",
    livereload: true
  });
});

gulp.task("reload", function () {
    gulp.src('./public/index.html')
        .pipe(connect.reload())
});

gulp.task("watch:html", function(){
    gulp.watch("public/*.html", ["reload"]);
});

gulp.task("build:styles", function () {
    return gulp.src("public/*.styl")
        .pipe(stylus({
            compress: false,
            "include css": true,
            use: nib()
        }))
        .pipe(gulp.dest("public/"))
        .pipe(connect.reload());
});

gulp.task("watch:styles", function(){
    gulp.watch("public/*.styl", ["build:styles", "reload"]);
});

// :: [String] -> Bundler
var createBundler = function(entries){
   bundler = browserify(Object.assign({}, watchify.args, {
       debug: config.debug
   }))
   bundler.add(entries)
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

// :: Bundler -> {file :: String, directory :: String} -> (() -> Void) -> (() -> Void) -> (() -> Void)
var buildAndWatch = function(bundler, output, done, onUpdate, onBuild){
   onceDone = underscore.once(done)
   watchifiedBundler = watchify(bundler)
   bundle(watchifiedBundler, output)
   watchifiedBundler
       .on("update", function(){
           if (onUpdate)
               onUpdate()
           bundle(watchifiedBundler, output)
       })
       .on("time", function(time){
           if (onBuild)
               onBuild()
           onceDone()
           gulpUtil.log(output.file + " built in " + (time / 1000) + " seconds")
       })
}

indexJsBundler = createBundler("./public/index.js")
indexJsBuilt = {
   directory: "./public", 
   file: "index.min.js"
}

gulp.task("build:scripts", function(){
   bundle(indexJsBundler, indexJsBuilt)
})

gulp.task("build-and-watch:scripts", function(done){
    buildAndWatch(
        indexJsBundler,
        indexJsBuilt,
        done,
        function(){},
        function(){
            gulp.src('./public/index.html')
                .pipe(connect.reload())
        }
    )
})

gulp.task("default", ["watch:html", "watch:styles", "build:styles", "build-and-watch:scripts", "dev:server"]);
gulp.task("build", ["build:styles", "build:scripts"]);