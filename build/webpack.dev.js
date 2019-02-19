const DashboardPlugin = require("webpack-dashboard/plugin")
const webpack = require("webpack")
// console.log()
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        open: true,
        hot: true,
        quiet: true,
        before:require("../mock/index")
    },
    plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new FriendlyErrorsPlugin({
                compilationSuccessInfo: {
                    messages: [`You application is running here http://localhost:8080`],
                    notes: ['Some additionnal notes to be displayed unpon successful compilation']
                },
                onErrors: function (severity, errors) {
                    // You can listen to errors transformed and prioritized by the plugin
                    // severity can be 'error' or 'warning'
                },
                // should the console be cleared between each compilation?
                // default is true
                clearConsole: true,
                // add formatters and transformers (see below)
                additionalFormatters: [],
                additionalTransformers: []
            })
    ]
}