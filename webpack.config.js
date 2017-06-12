var webpack = require('webpack');
var path = require('path');

module.exports= {
  entry: {
    app: './src/app.js',
	regApp: './src/regApp/regApp.js',
  postApp: './src/postApp/postApp.js'
  },
  output: {
    //filename: 'public/build/bundle.js',
	path : path.join(__dirname,'public/build'),
    filename: '[name].bundle.js',
    sourceMapFilename: 'public/build/bundle.map'
  },
  devtool: '#source-map',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}
