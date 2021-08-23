const path = require('path')
// import myLoader from "./loader/myLoader"
module.exports = {
    mode: "development",
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main2.js'
    },
    module: {
        rules: [{
            test: /\.txt$/,
            use: {
              loader: path.resolve(__dirname, './loader/myLoader.js'),
            },
          }],
    }
};