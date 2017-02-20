const gulp = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const sass = require('gulp-sass');

gulp.task('js', function() {
  gulp.src(['./app.js', 
  './mainCtrl.js',
  './mainSrv.js',
  './about/aboutCtrl.js',
  './characters/charactersCtrl.js',
  './footer/footer.js',
  './home/homeCtrl.js',
  './navbar/navbar.js',
  './video/videoCtrl.js'
  ])
  .pipe(babel({
    presets: ['es2015']
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('css', function() {
  gulp.src([
    './style.scss',
    './about/about.scss',
    './characters/characters.scss',
    './home/home.scss',
    './navbar/navbar.scss',
    './footer/footer.scss',
    './video/video.scss'

    ])
  .pipe(sass())
  .pipe(concat('bundle.css'))
  .pipe(gulp.dest('./dist'));
});


gulp.task('watch', function() {
  gulp.watch('./**/*.{css,scss}', ['css']);
  gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['js', 'css', 'watch']);