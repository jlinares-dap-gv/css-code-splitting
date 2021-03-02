// const MediaQueryPlugin = require('media-query-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    webpack: (config) => {
        // config.plugins.push(
        //     new MiniCssExtractPlugin()
        // );
        // config.module.rules.push({
        //     test: /\.scss$/,
        //     use: [
        //         MiniCssExtractPlugin.loader,
        //         'css-loader',
        //         MediaQueryPlugin.loader,
        //         'postcss-loader',
        //         'sass-loader'
        //     ]
        // });
        return config;
    },
};