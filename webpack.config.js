const path = require('path')
const MyPlugin = require('./plugin/MyPlugin.js')
module.exports = {
  mode: "development",
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main2.js'
  },
  plugins: [
    new MyPlugin()
  ],
  module: {
    rules: [{
      test: /\.txt$/,
      use: {
        loader: path.resolve(__dirname, './loader/myLoader.js'),
      },
    }],
  }
};