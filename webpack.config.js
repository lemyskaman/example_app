
var webpack = require("webpack");
var path = require('path');

module.exports = {
    entry: "./entry.js",
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/public',
        filename: "bundled_kamanapp.js"
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
            //'radio': 'radio',
            //'KCFG': 'KCFG',
            //'KLIBS': 'KLIBS',
            //'KCORE': 'KCORE'
        })
    ],
    //devtool:'cheap-eval-source-map',
    devtool: 'inline-source-map',
    /*watchOptions: {
        poll: true
    },*/
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