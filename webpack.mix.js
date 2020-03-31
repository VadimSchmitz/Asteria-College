const mix = require('laravel-mix');

// Load jQuery first
mix.autoload({
    jquery: ['$', 'jQuery', 'window.jQuery'],
});

mix.sourceMaps();
// JS Compileren
mix.js('resources/assets/scripts/app.js', 'public/assets/scripts/app.js');
mix.js('resources/assets/plugins/AdminLTE.js', 'public/assets/plugins');

// Styling compileren
mix.sass('resources/assets/scss/app.scss', 'public/assets/css/app.css', {implementation: require('node-sass')});
mix.sass('resources/assets/scss/element/index.scss', 'public/assets/css/element.css', {implementation: require('node-sass')});

// Static files verplaatsen
mix.copy('resources/assets/plugins/fontawesome-all.min.js', 'public/assets/plugins');
mix.copy('resources/assets/img/*', 'public/assets/img');

mix.webpackConfig(webpack => { // Override webpack.config.js, without editing the file directly.
    return {
        plugins: [
            // Using the NL language for Element components
            new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/nl')
        ],
        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: [ 'file-loader'],
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: file => (
                        /node_modules/.test(file) &&
                        !/\.vue\.js/.test(file)
                    )
                }
            ],
        },
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.runtime.esm.js'
            }
        },
    };
});
mix.browserSync('http://localhost:8000');
