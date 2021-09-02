const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');
const path = require('path');

const devConfig = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'alliexpress.js',
  },
  // devServer: {
  //   port: 8081,
  //   historyApiFallback: {
  //     index: 'index.html',
  //   },
  // },
  plugins: [
    // new ModuleFederationPlugin({
    //   name: 'alliexpres',
    //   filename: 'remoteEntry.js',
    //   exposes: {
    //     './Alliexpress': './src/bootstrap',
    //   },
    //   shared: packageJson.dependencies,
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
