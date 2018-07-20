var TransformModulesPlugin = require('webpack-transform-modules-plugin')

module.exports = {
    chainWebpack: config => {
        config.resolve.alias
        .set('cube-ui', 'cube-ui/lib')
    },
    configureWebpack: {
        plugins: [
            new TransformModulesPlugin()
        ]
    }
}