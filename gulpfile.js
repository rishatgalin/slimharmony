const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const del = require('del');
const browserSync = require('browser-sync').create();
const concatCss = require('gulp-concat-css');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const javascriptObfuscator = require('gulp-javascript-obfuscator');


const cssFiles = [
	'./source/css/reset.css',
	'./source/css/style.css',
]
function styles() {
	return gulp.src(cssFiles)
							.pipe(concatCss("css/common.min.css"))
							.pipe(autoprefixer({
								browsers: ['> 0.1%'],
		            cascade: false
			        }))
			        .pipe(cleanCSS({level: 2}))
			        .pipe(gulp.dest('./'))
			        .pipe(browserSync.stream());
}

function scripts() {
	return gulp.src('./source/js/sctipt.js')
							.pipe(concat('js/common.min.js'))
							.pipe(babel({
								presets: ['@babel/env']
							}))
							.pipe(uglify({toplevel: true}))
							.pipe(javascriptObfuscator({ compact: true }))
			        .pipe(gulp.dest('./'))
			        .pipe(browserSync.stream());
}

function watch() {
	browserSync.init({
    server: {
      baseDir: "./"
    }
  });
	gulp.watch('./source/css/**/*.css', styles);
	gulp.watch('./source/js/**/*.js', scripts);
	gulp.watch('./*.html', browserSync.reload);
}

function clean() {
	// return del(['./js/main.min.js', './css/styles.min.css'])// удалить 
}

function build() {
	return gulp.series(clean, gulp.parallel(styles, scripts))
}

function dev() {
	return gulp.series('build', 'watch');
}

// gulp.task('styles', styles);
// gulp.task('scripts', scripts);
// gulp.task('watch', watch);
// gulp.task('build', gulp.series(clean, gulp.parallel(styles, scripts)));
// gulp.task('dev', gulp.series('build', 'watch'));

exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.default = watch;