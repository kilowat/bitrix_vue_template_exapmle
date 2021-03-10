const path = require("path");
const templateName = path.resolve(__dirname, '..').split(path.sep).pop();
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    devServer: {
        writeToDisk: true // https://webpack.js.org/configuration/dev-server/#devserverwritetodisk-
    },
    transpileDependencies: [
        'vuetify'
    ],
    outputDir: '../dist',
    publicPath : `/local/templates/${templateName}/dist`,

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
                name: 'img/[name].[hash:8].[ext]'
            }))
        config.module.rule('svg').use('file-loader')
            .tap(options => Object.assign(options, {
                name: 'svg/[name].[hash:8].[ext]'
            }))
    },
    css: {
        extract: {
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[name].[hash:8].css'
        }
    },
    configureWebpack: {
        plugins: [
            new CleanWebpackPlugin()
        ],
        output: {
            filename: 'js/[name].[hash:8].js',
            chunkFilename: 'js/[name].[hash:8].js'
        }
    }
}
