// generated on 2016-03-23 using generator-webapp 2.0.0
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
const $ = gulpLoadPlugins();
const reload = browserSync.reload;




gulp.task('styles', () => {
  return gulp.src('.tmp/styles/*.styl')
    .pipe($.plumber())
    .pipe($.stylus())
    .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
    .pipe(gulp.dest('docs/styles'))
    .pipe(reload({stream: true}));
});



gulp.task('build', ['dist-ugly'], () => {
    return gulp.src('docs/styles/main.css')
        .pipe($.plumber())
        .pipe($.cleanCss())
        .pipe($.rename((path)=> {
            path.extname = '.min.css';
        }))
        .pipe($.size())
        .pipe(gulp.dest("dist"));
});

gulp.task('dist-ugly', () => {
    return gulp.src('docs/styles/main.css')
        .pipe($.plumber())
        .pipe($.size())
        .pipe(gulp.dest("dist"));
});

gulp.task('serve', ['styles'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['.tmp', 'docs']
  },
  browser: "google chrome"
  });

  gulp.watch(['docs/*.html']).on('change', reload);

  gulp.watch('.tmp/styles/**/*.styl', ['styles']);
});
