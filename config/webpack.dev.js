const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

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
                dashboard: 'dashboard@http://localhost:8081/remoteEntry.js',
                vue3: 'vue3@http://localhost:8082/remoteEntry.js',
                vue2: 'vue2@http://localhost:8083/remoteEntry.js',
            },
        }),
    ],
};

module.exports = merge(commonConfig, devConfig);
