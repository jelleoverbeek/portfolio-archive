'use strict';
const gulp = require('gulp');
const sass = require('gulp-sass');
const twig = require('gulp-twig');

gulp.task('sass', function () {
    return gulp.src('./assets/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./build/assets/css'));
});

gulp.task('img', function () {
    return gulp.src('./assets/img/**/*')
        .pipe(gulp.dest('./build/assets/img'))
});

gulp.task('video', function () {
    return gulp.src('./assets/video/**/*')
        .pipe(gulp.dest('./build/assets/video'))
});

gulp.task('js', function () {
    return gulp.src('./assets/js/**/*')
        .pipe(gulp.dest('./build/assets/js'))
});

gulp.task('twig', function () {
    const files = [
        "./assets/twig/index.twig",
        "./assets/twig/about.twig",
        "./assets/twig/case-detail.twig"
    ];

    return gulp.src(files)
        .pipe(twig())
        .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function () {
    gulp.watch('./assets/**/*', ['default']);
});

gulp.task('default', ['sass', 'js', 'img', 'twig', 'video']);
gulp.task('build', ['sass', 'js', 'img', 'twig', 'video']);