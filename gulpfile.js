const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));

gulp.task('browser-sync', function (){
    browserSync.init({
        server: {
            baseDir: "./src/"
        }
    })
})

gulp.task('sass', function(){
    return gulp.src('./src/assets/styles/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/assets/styles/css/'))
});