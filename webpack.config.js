var webpack = require('webpack');
var path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.join(__dirname, "public"),
  entry: './js/app.js',
  module: {
    loaders: [
      {
        test: /\.js|.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      }, {
		test: /\.scss$/,
		loader: ExtractTextPlugin.extract({
		  fallback: 'style-loader',
          use: 'css-loader?sourceMap!sass-loader?sourceMap'
		})
	  }		  
    ]
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/bundle.js',
//	publicPath: '/js/'
  },
  plugins: [
	new ExtractTextPlugin({
		filename: 'css/app.css',
		allChunks: true,
		disable: process.env.NODE_ENV !== 'production'
	})
  ]
};
