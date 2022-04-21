module.exports = {
    entry: './src/index.js',
    module: {
        rules: [
            //...
            {
                test: /\.svg$/,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            },
        ],
    },
    //...
};