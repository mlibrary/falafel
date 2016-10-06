'use strict';

var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("./stylesheets/*.scss", ['sass']);
    gulp.watch("./stylesheets/**/*.scss", ['sass']);
    gulp.watch("./*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("./stylesheets/main.scss")
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest("./assets/stylesheets"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
