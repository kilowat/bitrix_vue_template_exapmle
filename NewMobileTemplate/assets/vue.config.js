module.exports = {
    transpileDependencies: [
        'vuetify'
    ],
    outputDir: '../dist',
    publicPath : '/local/templates/NewMobileTemplate/dist',
    pages: {
        index: {
            // entry for the page
            entry: 'src/main.js',
            // the source template
            template: 'template/header.php',
            // output as dist/index.html
            filename: '../header.php',
        },
    },
    chainWebpack: config => {
        config.module.rule('images').use('url-loader')
            .loader('file-loader') // replaces the url-loader
            .tap(options => Object.assign(options, {
                name: '[name].[hash:8].[ext]'
            }))
        config.module.rule('svg').use('file-loader')
            .tap(options => Object.assign(options, {
                name: '[name].[hash:8].[ext]'
            }))
    },
    css: {
        extract: {
            filename: '[name].[hash:8].css',
            chunkFilename: '[name].[hash:8].css'
        }
    },
    configureWebpack: {
        output: {
            filename: '[name].[hash:8].js',
            chunkFilename: '[name].[hash:8].js'
        }
    }
}
