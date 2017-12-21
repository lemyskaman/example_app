
var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./entry.js",


    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/public',
        filename: "bundled_kamanapp.js"
    },

    devServer:{
        port:'9000'
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules', 'kaman'],
        alias: {
            '_': 'underscore',
            'Backbone': 'backbone',
            'Marionette': 'backbone.marionette'
            //'radio': 'backbone.radio',
            //'KCFG': path.resolve(__dirname, 'kamanapp/config'),
            //'KLIBS': path.resolve(__dirname, 'kamanapp/libs'),
            //'KCORE': path.resolve(__dirname, 'kamanapp/core')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            '_': '_',
            'Backbone': 'Backbone',
            'Marionette': 'Marionette'

        })
    ],
    //devtool:'cheap-eval-source-map',
    devtool: 'inline-source-map',

    module: {

        rules: [

            {//allowing to debug with real files lines output
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]

            },
            {
                test: /\.html$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },

        ]

    }

};