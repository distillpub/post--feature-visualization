const path = require("path");
const webpack = require("webpack");

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WebpackBundleSizeAnalyzerPlugin = require('webpack-bundle-size-analyzer').WebpackBundleSizeAnalyzerPlugin;
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  entry: {
    "index": "./src/index.js",
  },
  resolve: {
    extensions: [ ".js", ".html", ".npy", ".json" ]
  },
  output: {
    path: __dirname + "/public",
    filename: "[name].bundle.js",
    chunkFilename: "[name].[id].js"
  },
  module: {
    rules: [
      {
        test: /\.(html|js)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.(html|svelte)$/,
        exclude: /node_modules/,
        loader: "svelte-loader"
      },
      {
        test: /\.(npy|npc)$/,
        exclude: /node_modules/,
        loader: 'numpy-loader',
        options: {
          outputPath: 'data/'
        }
      },
      {
        test: /\.(json)$/,
        exclude: /node_modules/,
        loader: 'json-loader',
        options: {
          outputPath: 'data/'
        }
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        exclude: /node_modules/,
        loader: 'file',
        options: {
          outputPath: 'images/'
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.css$/,
        use: 'raw-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", 
      template: "./src/index.ejs", 
      chunks: ["index"],
      svgoConfig: {
        removeViewBox: false,
        transformsWithOnePath: true,
      },
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new CopyWebpackPlugin([ { from: 'static/' } ]),
    new WebpackBundleSizeAnalyzerPlugin('../bundle-size-report.txt'),
    // new CompressionPlugin({
    //   asset: "[path].gz[query]",
    //   algorithm: "gzip",
    //   test: /\.js$|\.css$|\.html$/,
    //   threshold: 10240, // 10KB
    //   minRatio: 0.8 
    // })
  ],
  devServer: {
    historyApiFallback: true,
    overlay: true,
    stats: "minimal",
    contentBase:  __dirname + "/public"
  },
  devtool: "inline-source-map"
};
