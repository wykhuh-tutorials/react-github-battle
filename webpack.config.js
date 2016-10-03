var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  // input file
  template: __dirname + '/app/index.html',
  // output file
  filename: 'index.html',
  // add script tag in <body>
  inject: 'body'
});

module.exports = {
  entry: [
    './app/index.js'
  ],
  output: {
    path: __dirname + '/dist',
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      // run all js files through babel
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  },

  // copy index.html into output folder
  plugins: [HTMLWebpackPluginConfig]
};
