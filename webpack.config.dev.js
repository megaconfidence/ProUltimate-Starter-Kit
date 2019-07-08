const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  target: 'web',
  devtool: 'inline-source-map',
  entry: [path.resolve(__dirname, 'src/js/index'), path.resolve(__dirname, 'src/js/vendor')],
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    port: 4040,
    liveReload: true,
    watchContentBase: true,
    contentBase: path.join(__dirname, 'src'),
    stats: {
      maxModules: 0,
      children: false
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'compressed',
              includePaths: [
                'src/styles/scss/styles.scss',
                'src/styles/scss/styles.scss'
              ]
            }
          }
        ]
      }
    ]
  }
};
