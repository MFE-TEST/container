const { merge } = require('webpack-merge');
const path = require('path');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');

const DASHBOARD_URL = process.env.DASHBOARD_URL || 'https://mfe-test.github.io/remote-react';
const VUE3_URL = process.env.DASHBOARD_URL || 'https://mfe-test.github.io/remote-vue3/';
const VUE2_URL = process.env.VUE2_URL || 'https://mfe-test.github.io/remote-vue2/';

const DOMAIN = process.env.DOMAIN || 'https://mfe-test.github.io/container/';
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
        vue3: `vue3@${VUE3_URL}/remoteEntry.js`,
        vue2: `vue2@${VUE2_URL}/remoteEntry.js`,
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
