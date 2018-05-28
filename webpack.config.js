const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin')

const config = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
  },
  module:{
    rules:[
      { test: /\.vue$/, use: 'vue-loader' },
      { test: /\.js$/, use: 'babel-loader' },
      { test: /\.html$/, use: 'html-loader' },
      { test: /\.css$/, use: [ 'style-loader', 'css-loader' ] },
      { 
        test: /.(jpg|png)$/, 
        use: [
          { 
            loader: 'file-loader',
            options: {
              name:'[path][name].[ext]',
              publicPath: path.resolve(__dirname, 'dist', 'assets')
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html')
    }),
    new VueLoaderPlugin()
  ]
}

module.exports = config