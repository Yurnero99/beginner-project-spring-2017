module.exports = {
  devtool: 'inline-source-map',
  entry: './frontend/app.jsx',
  devServer:{
    inline:true,
    progress:true,
    contentBase:'public',
    historyApiFallback: true
  },
  output: {
    path: `${__dirname}/public`,
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [' ', '.js', '.jsx']
  },
  module:{
    loaders:[
      { test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude:/node_modules/,
        query: {
          // Here you can put plugins, like plugins:['transform-runtime']
          // plugins:['transform-class-properties'],
          presets: ['es2015', 'react', 'stage-3']
        }
      }]
  }
};
