const mix = require('laravel-mix');
let isProduction = (process.env.NODE_ENV === 'production');

mix.autoload({jquery: ['$', 'jQuery', 'window.jQuery']})
    .js('resources/assets/scripts/app.js', 'public/assets/scripts/app.js')
    .js('resources/assets/plugins/AdminLTE.js', 'public/assets/plugins');
mix.sass('resources/assets/scss/app.scss', 'public/assets/css/app.css', {implementation: require('node-sass')})
    .sass('resources/assets/scss/element/index.scss', 'public/assets/css/element.css', {implementation: require('node-sass')});

mix.copy('resources/assets/img/*', 'public/assets/img')
    .copy('resources/assets/plugins/fontawesome-all.min.js', 'public/assets/plugins');

mix.webpackConfig(webpack => {// Override webpack.config.js, without editing the file directly.
    return {
        plugins: [
            // Using the NL language for Element components
            new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/nl')
        ],
        // plugins: plugins,
        optimization: {
            minimize: isProduction,
            mergeDuplicateChunks: true
        },
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
                vue$: isProduction ? 'vue/dist/vue.js' : 'vue/dist/vue.runtime.esm.js'
            }
        },
    };
}).browserSync('http://localhost:8000');
