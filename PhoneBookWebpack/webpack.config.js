const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

module.exports = {
    devtool: "source-map",

    target: ["web", "es5"],

    entry: "./phoneBook.js",

    output: {
        filename: "./dist/script.js",
        path: path.resolve(__dirname, "../PhoneBookWebpack")
    },

    resolve: {
        alias: {
            "vue$": "vue/dist/vue.esm.js"
        }
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                use: "vue-loader"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader"
                ]
            },

            {
                test: /\.(png|jpg|gif|svg|ttf|eot|woff|woff2)$/,
                use: "file-loader?name=[path][name].[ext]?[contenthash]"
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "./dist/styles.css"
        }),
        new VueLoaderPlugin()
    ]
}