const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

const DASHBOARD_URL = process.env.DASHBOARD_URL || 'https://mfe-test.github.io/remote-react';

const DOMAIN = process.env.DOMAIN || 'https://mfe-test.github.io/containter/';
const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, `../build`),
    publicPath: DOMAIN,
    clean: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        dashboard: `dashboard@${DASHBOARD_URL}/remoteEntry.js`,
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
}

module.exports = merge(commonConfig, prodConfig)
