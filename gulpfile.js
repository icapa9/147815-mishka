"use strict";

var gulp = require("gulp");
var less = require("gulp-less");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var mqpacker = require("css-mqpacker");
var minify = require("gulp-csso");
var imagemin = require("gulp-imagemin");
var rename = require("gulp-rename");
var svgmin = require("gulp-svgmin");
var del = require("del");
var server = require("browser-sync").create();


gulp.task("style", function() {
  gulp.src("less/style.less")
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([
      autoprefixer({browsers: [
        "last 2 versions"
      ]}),
      mqpacker({
        sort: true
        })
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(minify())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest("build/css"));
});

gulp.task("images", function() {
    return gulp.src("img/**/*.{png,jpg,gif}")
    .pipe(gulp.dest("img"));
     pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true})
    ]))
    .pipe(gulp.dest("img"));
    });

gulp.task("serve", function() {
 server.init({
 server: "build/"
 });
 gulp.watch("less/**/*.less", ["style"]);
 gulp.watch("*.html", ["html:update"]);
});

gulp.task("copy", function() {
 return gulp.src([
 "fonts/**/*.{woff,woff2}",
 "img/**",
 "js/**",
 "*.html"
 ], {
 base: "."
 })
 .pipe(gulp.dest("build"));
});

gulp.task("clean", function() {
 return del("build");
});

gulp.task("html:copy", function() {
 return gulp.src("*.html")
 .pipe(gulp.dest("build"));
});

gulp.task("html:update", ["html:copy"], function(done) {
 server.reload();
 done();
});

gulp.task("build", function(fn) {
 run(
 "clean",
 "copy",
 "style",
 "images",
 "serve",
 "htnl:copy",
 "html:update",
 fn
 );
});
