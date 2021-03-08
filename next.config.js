const path = require('path');

module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
   /* webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        /*config.plugins.push(
            new MediaQueryPlugin({
                include: [
                    'example'
                ],
                queries: {
                    'screen and (max-width: 20rem)': 'mobile',
                }
            })
        );
        
        config.module.rules.push({
            test: /\.scss$/,
            use: [
                'css-loader',
                //MediaQueryPlugin.loader,
                'postcss-loader',
                'sass-loader'
            ]
        });
        return config;
    },*/
};