const webpack = require('webpack')
module.exports = {
    outputDir: 'vuetorrent/public',
    publicPath: './',
    transpileDependencies: ['vuetify'],
    configureWebpack: {
        devtool: 'source-map',
        plugins: [
            new webpack.DefinePlugin({
                APPLICATION_VERSION: JSON.stringify(
                    require('./package.json').version
                )
            })
        ]
    },
    devServer: {
        watchOptions: {
            poll: true
        },
        host: '0.0.0.0',
        port: 8000,
        proxy: {
            '/api': {
                target: 'http://192.168.1.254:8085'
            }
        }
    }
}
