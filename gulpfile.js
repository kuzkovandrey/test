
const {src, dest, parallel, series, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');

function browsersync() {
	browserSync.init({
		server: { baseDir: 'dist/' },
		notify: false,
		online: false
	})
}

function styles() {
	return src('app/scss/common.scss')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: false }))
	.pipe(cleanCSS({compatibility: 'ie8'}))
	.pipe(rename("main.min.css"))
	.pipe(dest('dist/css/'))
	.pipe(browserSync.stream());
}

function scripts() {
	return src('app/scripts/*.js')
	.pipe(concat('main.min.js'))
	.pipe(babel({
        presets: ['@babel/env']
    }))
	.pipe(uglify())
	.pipe(dest('dist/scripts'))
	.pipe(browserSync.stream());
}

function html() {
	return src('app/index.html')
	.pipe(dest('dist'))
	.pipe(browserSync.stream());
}

function images() {
	return src('app/images/*')
	.pipe(imagemin([
		imagemin.mozjpeg({quality: 50, progresive: true})
		]))

	.pipe(dest('dist/images'))
	.pipe(browserSync.stream());;
}

function svg() {
	return src('app/svg/*')
	.pipe(dest('dist/svg'))
	.pipe(browserSync.stream());;
}


function startWatch() {
	watch('app/*.html', html);
	watch('app/scss/*.scss', styles);
	watch('app/scripts/*.js', scripts);
	watch('app/*.html').on('change', html);
	watch('app/images/*', images);
	watch('app/svg/*', svg);
}

exports.browsersync = browsersync;
exports.html = html;
exports.styles = styles;
exports.default = parallel(svg, images, html, styles, scripts, browsersync, startWatch);