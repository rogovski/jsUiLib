var path = require('path'),
    gulp = require('gulp'),
    gutil = require('gulp-util'),
    webpack = require('webpack');


var webpackConfig = {
    entry: './index.js',
    output: {
        libraryTarget: "this",
        library: "jsUiLib",
        path: '',
        filename: 'jsUiLib.js'
    },
    externals: {
        "jquery": "$"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['react']
                }
            }
        ]
    }
};


var appCompiler = webpack(webpackConfig);


gulp.task('bundle-dev', function (next) {
    appCompiler.run(function (err, stats) {
        if(err){
            gutil.log(gutil.colors.red('ERROR'), err);
        }
        gutil.log(gutil.colors.green('BUNDLED'));
        next();
    });
});


gulp.task('watch-dev', function () {
    var watcher = gulp.watch(
        [
            'index.js'
        ],
        [
            'bundle-dev'
        ]);

    watcher.on('change', function(event) {
        gutil.log(gutil.colors.green('CHANGE: '), event.path);
        gutil.log(gutil.colors.green('EVENT: '), event.type);
    });
});
