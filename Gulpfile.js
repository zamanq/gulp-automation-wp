const themename = 'wp-theme-name';

const gulp = require('gulp'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),

    // Name of the working theme folder
    root = '../' + themename + '/',
    scss = root + 'sass/',
    js = root + 'js/';


//CSS using Sass and Autoprefixer
function style() {
    return gulp.src(scss + '{style.scss,rtl.scss}')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
            indentType: 'tab',
            indentWidth: '1'
        }).on('error', sass.logError))
        .pipe(postcss([
            autoprefixer('last 2 versions', '> 1%')
        ]))
        .pipe(sourcemaps.write(scss + 'maps'))
        .pipe(gulp.dest(root));
}

//Watch
function watch() {
    browserSync.init({
        open: 'external',
        proxy: 'your-site.anything',
        port: 8080
    });
    gulp.watch(root + '**/*.scss', style);
    gulp.watch(js + '**/*.js').on('change', browserSync.reload);
    gulp.watch(root + '**/*.php').on('change', browserSync.reload);
    gulp.watch(root + '**/*').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
