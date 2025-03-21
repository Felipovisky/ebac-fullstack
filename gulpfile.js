const postcss = require('gulp-postcss');
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const imagemin = require("gulp-imagemin");
const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");


const paths = {
  scss: "./scss/**/*.scss",
  css: "./css",
  js: "./js/**/*.js",
  img: "./image/**/*",
};

function styles() {
  return gulp
    .src(paths.scss)
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([require('autoprefixer')()]))
    .pipe(cleanCSS())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(paths.css));
}

function images() {
  return gulp.src(paths.img).pipe(imagemin()).pipe(gulp.dest("./image"));
}

function watchFiles() {
  browserSync.init({ server: { baseDir: "./" } });

  gulp.watch(paths.scss, styles);
  gulp.watch(paths.css + "/**/*.css").on("change", browserSync.reload);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch(paths.js).on("change", browserSync.reload);
}

exports.default = gulp.series(styles, gulp.parallel(watchFiles));