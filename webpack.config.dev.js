const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  debug: true,
  devtool: 'source-map',
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
		contentBase: './',
		hot: true,
  },
  plugins: [
      new ExtractTextPlugin('bundle.css', { allChunks: true }),
      new HtmlWebpackPlugin({
          template: './src/index.html',
          inject: 'body',
      }),
      new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'dev'),
          // __APP_NAME__: JSON.stringify(packageJson.name),
          // __DOMAIN__: JSON.stringify(config.DOMAIN),
      }),
  ],
  module: {
    loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['es2015'],
            },
        },
        {
            test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
            loader: "file-loader?name=img/img-[hash:6].[ext]"        },
        {
            test: /\.scss$/,
            loaders: [
                'style',
                'css',
                'sass'
            ]
        },
        {
              test: /\.html$/,
              loader: 'html',
        },
        {
            test: /\.(png|jpg)$/,
            loaders: [
                'url'
            ],
            query: {
                limit: 8192
            }
        }
    ]
},
resolve: {
		extensions: ['', '.scss', '.css', '.js', '.json'],
		modulesDirectories: [
			'node_modules',
			path.resolve(__dirname, './node_modules'),
		],
		root: path.resolve('./')
    }
}
