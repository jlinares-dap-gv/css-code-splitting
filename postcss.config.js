const path = require('path');

module.exports = {
    plugins: {
        'postcss-extract-media-query': {
            output: {
                path: path.join(__dirname, 'media'),
                name: '[query].css'
            },
            queries: {
                'only screen and (max-width: 600px)': 'mobile',
                'only screen and (min-width: 1200px)': 'desktop'

            },
            extractAll: false
        }
    }
};