const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const devConfig = {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/'
        },
    },
    output: {
        publicPath: "http://localhost:8080/",
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                dashboard: 'dashboard@http://localhost:8081/remoteEntry.js'
            },
            // shared: {
            //     react: {
            //         singleton: true,
            //         eager: false,
            //         requiredVersion: packageJson.dependencies.react
            //     }
            // }
        })
    ],
};

module.exports = merge(commonConfig, devConfig);
