const externals = require('webpack-node-externals')();
const path = require('path');
module.exports = {
  entry: './app/index.js',
  externals:[externals],
  output: {
    path: path.resolve(__dirname,'../dist'),
    filename: 'server.js'
  },
  target:'node',
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