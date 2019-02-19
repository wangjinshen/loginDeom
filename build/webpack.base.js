const path = require("path")
const merge = require("webpack-merge")
const configDev = require("./webpack.dev")
const configPro = require("./webpack.pro")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const SpritesmithPlugin = require('webpack-spritesmith')
const isProduction = process.env.NODE_ENV === "production" ? "production" : "development"
const configBase = {
    mode: isProduction,
    entry: {
        mian: path.join(process.cwd(), "src/mian.js")
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: ["vue-style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: [
                    "vue-style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                loader: ['url-loader']
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: ['vue-loader']
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader'
            }
        ]
    },
    resolve: {
        alias: {
            $vue: "vue/dist/vue.esm.js",
            'cube-ui': 'cube-ui/lib'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            inject: "body",
            filename: "index.html",
            template: "index.html",
        }),
    ]
}

const webpackConfig = isProduction === "production" ? configPro : configDev;
module.exports = merge(
    configBase,
    webpackConfig
)