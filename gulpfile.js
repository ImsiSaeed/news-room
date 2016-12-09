var gulp = require('gulp'),
	del = require('del'),
	bowerFiles = require('main-bower-files'),
	concat = require('gulp-concat'),
	templateCache = require('gulp-angular-templatecache'),
	filter = require('gulp-filter');

gulp.task('clean', function () {
	del('./public');
});

gulp.task('pages', function () {
	return gulp.src('./app/pages/**/*.html')
		.pipe(templateCache('pages.js', {
			module: 'NewsRoom',
			transformUrl: function (url) {
                return url.replace('.html', '').replace(/\\+/g, '.').replace(/\/+/g, '.');
            }
		}))
		.pipe(gulp.dest('./public'));
})

gulp.task('vendor', function () {
	var jsFiles = filter('**/*.js', {restore: true});
	var cssFiles = filter('**/*.css', {restore: true});

	return gulp.src(bowerFiles())
		.pipe(jsFiles)
		.pipe(concat('vendor.js'))
		.pipe(gulp.dest('./public'))
		.pipe(jsFiles.restore)
		.pipe(cssFiles)
		.pipe(concat('vendor.css'))
		.pipe(gulp.dest('./public'))
		.pipe(cssFiles.restore);
});

gulp.task('styles', function () {
	return gulp.src('./app/**/*.css')
		.pipe(concat('app.css'))
		.pipe(gulp.dest('./public'));
});

gulp.task('scripts', function () {
	return gulp.src('./app/**/*.js')
		.pipe(concat('app.js'))
		.pipe(gulp.dest('./public'));
});

gulp.task('watch', function () {
	gulp.watch('./app/**/*.css', ['styles']);
	gulp.watch('./app/**/*.js', ['scripts']);
	gulp.watch('./app/pages/**/*.html', ['pages']);
});

gulp.task('all', ['clean'], function () {
	gulp.start('vendor', 'pages', 'styles', 'scripts', 'watch');
});

gulp.task('default', ['all'], function () {
	console.log('Compilation complete!');
});