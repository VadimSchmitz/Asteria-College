const mix = require('laravel-mix');
let isProduction = (process.env.NODE_ENV === 'production');

mix.autoload({jquery: ['$', 'jQuery', 'window.jQuery']})
    .js('resources/assets/scripts/app.js', 'app.js')
    .js('resources/assets/plugins/AdminLTE.js', 'AdminLTE.js');

mix.sass('resources/assets/scss/app.scss',  path.resolve(__dirname, '../css/web.css'), {implementation: require('node-sass')})
    .sass('resources/assets/scss/element/index.scss', path.resolve(__dirname, '../css/element.css'), {implementation: require('node-sass')})
    .options({processCssUrls: true});

mix.webpackConfig(webpack => {// Override webpack.config.js, without editing the file directly.
    let plugins;

    if (isProduction)
        plugins = [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('production')
            }),
            // Using the NL language for Element components
            new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/nl')
        ];

    else plugins = [
            // Using the NL language for Element components
            new webpack.NormalModuleReplacementPlugin(/element-ui[\/\\]lib[\/\\]locale[\/\\]lang[\/\\]zh-CN/, 'element-ui/lib/locale/lang/nl')
        ];

    return {
        plugins: plugins,
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
        output: {
            umdNamedDefine: true,
            publicPath: '/assets/scripts/',
            path: path.resolve(__dirname, 'public/assets/scripts'),
            filename: '[name].js',
            chunkFilename: '[name].js',
        },
    };
}).copy('resources/assets/img/*', 'public/assets/img')
    .copy('resources/assets/plugins/fontawesome-all.min.js', 'public/assets/scripts')
    .sourceMaps(false)
    .browserSync('http://localhost:8001')
    .disableNotifications();
