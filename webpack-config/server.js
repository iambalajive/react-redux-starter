const externals = require('webpack-node-externals')();
const path = require('path');
module.exports = {
  entry: './src/index.js',
  externals:[externals],
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'server.js'
  },
  target:'node',
  node: {
  __dirname: false,
  __filename: false,
},
   module: {
       rules: [
      {
        test: /\.js?/,
        use: [
          { loader: 'babel-loader'},
        ]
      }
    ]
    
}
}