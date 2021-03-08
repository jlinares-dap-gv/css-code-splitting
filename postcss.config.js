const path = require('path');

module.exports = {
    plugins: {
        'postcss-extract-media-query': {
            output: {
                path: path.join(__dirname, '.next/static/css'),
                name: '[name]-[query].css'
            },
            queries: {
                'screen and (max-width: 20rem)': 'mobile',
                'screen and (min-width: 64em)': 'desktop'
            },
            extractAll: false,
            stats: true
        }
    }
};