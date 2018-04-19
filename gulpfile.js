const gulp = require("gulp");
const prefix = require("gulp-autoprefixer");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const del = require("del");
const rename = require("gulp-rename");

// Image compression
const imagemin = require("gulp-imagemin");
const imgPngQuant = require("imagemin-pngquant");
const imgJpgRecompress = require("imagemin-jpeg-recompress");

const handleError = err => {
  console.log(err);
};

const SCSS_PATH = "./src/scss/*.scss";
const DEST_PATH = "src/";
const IMAGES_PATH = "images/**/*.{png,jpeg,jpg,svg,gif}";

gulp.task("images", () => {
  console.log("starting images task");
  return gulp
    .src(IMAGES_PATH)
    .pipe(
      imagemin([
        imagemin.gifsicle(),
        imagemin.jpegtran(),
        imagemin.optipng(),
        imagemin.svgo(),
        imgPngQuant(),
        imgJpgRecompress()
      ])
    )
    .pipe(gulp.dest(DEST_PATH + "/images"));
});

gulp.task("style", () => {
  return gulp
    .src(SCSS_PATH)
    .pipe(plumber())
    .on("error", handleError)
    .pipe(sourcemaps.init())
    .pipe(
      sass({
        outputStyle: "compressed"
      })
    )
    .pipe(prefix())
    .pipe(sourcemaps.write())
    .pipe(rename("style.css"))
    .pipe(gulp.dest(DEST_PATH));
});

gulp.task("watch", () => {
  gulp.watch(SCSS_PATH, ["style"]);
});

gulp.task("default", ["images", "style"]);
