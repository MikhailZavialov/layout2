var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var rename = require('gulp-rename');
var del = require('del');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');

gulp.task('sass', function() {
  return gulp.src(['./app/scss/**/*.+(sass|scss)']) // все файлы scss sass в дериктории
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { // потдержка версий браузеров
      cascade: true                               // для каскадности  кода
    }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});


gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    notify: false
  });
});

gulp.task('watch', ['browser-sync', 'sass', 'css-libs', 'scripts'], function() {
  gulp.watch('./app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('scripts', function() {   // таск для сжатия js либ
  return gulp.src(['app/libs/jquery/dist/jquery.min.js', 'app/libs/bootstrap-4.1.3-dist/js/bootstrap.bundle.min.js', 'app/libs/bootstrap-4.1.3-dist/js/bootstrap.min.js'])
    .pipe(concat('libs.min.js')) // конкатенирование  js файлов в один файл
    .pipe(uglify()) // сжатие
    .pipe(gulp.dest('app/js')) // путь куда помещаем файл
});

gulp.task('css-libs', ['sass'], function() {  // таск для сжатия css либ
  return gulp.src('app/css/libs.css')
    .pipe(cssnano())
    .pipe(rename({suffix: '.min'}))  // добавить сжатому файлу суфикс min
    .pipe(gulp.dest('app/css'))
});



gulp.task('clean', function() {    //  удаление папки dist
  return del.sync('dist')
});

gulp.task('clear', function() { // таск для чистки кеша изображений
  return cache.clearAll();
});

gulp.task('img', function() {
  return gulp.src('app/img/**/*')
    .pipe(cache(imagemin({
      interlaced: true,
      progressive: true,  //  опция управляет методом сжатия графических файлов
      svgoPlugins: [{removeViewBox: false}],
    })))
    .pipe(gulp.dest('dist/img'));
});



gulp.task('bild', ['img', 'sass', 'scripts'], function() {
  var bildCss = gulp.src([
  'app/css/style.css',
  'app/css/libs.min.css',
])
    .pipe(gulp.dest('dist/css'));           // в dist храняться готовые файлы

  var bildFonts = gulp.src('app/fonts/**/*')
    .pipe(gulp.dest('dist/fonts'));

  var bildJs = gulp.src('app/js/**/*')
    .pipe(gulp.dest('dist/js'));

  var bildHtml = gulp.src('app/*.html')
    .pipe(gulp.dest('dist'));
});
