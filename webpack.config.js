const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = [
    {
        devtool: 'cheap-module-eval-source-map',
        entry: 'client/main.ts',
        module: {
            rules: [
                {
                    test: /\.(?:j|t)sx?$/,
                    use: [
                        'ts-loader'
                    ]
                }
            ]
        },
        output: {
            filename: 'client.js',
            path: path.resolve(__dirname, 'build')
        },
        resolve: {
            alias: {
                client: path.resolve(__dirname, 'client')
            },
            extensions: [
                '.js', '.ts', '.tsx'
            ]
        },
        target: 'web'
    },
    {
        devtool: 'none',
        entry: 'server/main.ts',
        externals: [
            webpackNodeExternals()
        ],
        module: {
            rules: [
                {
                    test: /\.(?:j|t)sx?$/,
                    use: [
                        'ts-loader'
                    ]
                }
            ]
        },
        output: {
            filename: 'server.js',
            path: path.resolve(__dirname, 'build')
        },
        resolve: {
            alias: {
                server: path.resolve(__dirname, 'server')
            },
            extensions: [
                '.js', '.ts', '.tsx'
            ]
        },
        target: 'node'
    }
];
