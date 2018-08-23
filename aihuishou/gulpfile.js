var gulp = require('gulp'),
    
   
    connect = require('gulp-connect');

    gulp.task('copy-html', function(){
        return gulp.src("html/*.html")
        .pipe(gulp.dest("dist"))
        .pipe(connect.reload());          
    })

    gulp.task('images', function(){
        return gulp.src("*.{jpg,png}")
        .pipe(gulp.dest("dist/images"))
        .pipe(connect.reload());
    })

    gulp.task('scripts', function(){
        return gulp.src(["*.js", "!gulpfile.js"])
        .pipe(gulp.dest("dist/js"))
        .pipe(connect.reload());
    })

	var scss = require('gulp-sass-china');
	var plumber = require('gulp-plumber');
gulp.task('scss', function(){
	return gulp.src('stylescss/*.scss')
	.pipe(plumber())
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})

gulp.task('data', function(){
	return gulp.src(['*.json', "!package.json", "!package-lock.json"])
	.pipe(gulp.dest('dist/data'))
	.pipe(connect.reload());
})

gulp.task('build', ["copy-html", "images", "scripts", "data", "scss"], function(){
	console.log("编译完成");
})

gulp.task('watch', function(){
	
	gulp.watch("html/*.html", ["copy-html"]);
	gulp.watch("*.{jpg,png}", ["images"]);
	gulp.watch("stylescss/***/*.scss", ["scss"]);
	gulp.watch(['*.json', "!package.json", "!package-lock.json"], ["data"]);
	gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
})

var connect = require('gulp-connect');
gulp.task('server', function(){
	connect.server({
		root: 'dist',
		port: 8888,
		livereload: true
	})
})


gulp.task("default", ['watch', 'server']);
