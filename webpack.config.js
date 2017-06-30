const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve (dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = {
	entry: resolve('src/index.js'),
	output: {
		path: resolve('dist'),
    filename: '[name].js'
	},
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    }
  },
	module: {
		rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 8000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        include: [resolve('src'), resolve('node_modules/vue-awesome-swiper')],
        options: {
          loaders: {
            less: 'vue-style-loader!style-loader!css-loader!less-loader',
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: resolve('src'),
      },
      {
        test: /\.css$/,
        use: [{
          loader: "style-loader"
        }, {
          loader: "css-loader"
        }],
      },
      {
        test: /\.less$/,
        use: [{
          loader: "style-loader"
          // creates style nodes from JS strings
        }, {
          loader: "css-loader"
          // translates CSS into CommonJS
        }, {
          loader: "less-loader"
          // compiles Less to CSS
        }],
        include: resolve('src'),
      },
		]
	},
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    hot: true,
    // 开启服务器的模块热替换(HMR)

    disableHostCheck: true,

    contentBase: resolve('src'),
    // 输出文件的路径

    publicPath: '/',

    historyApiFallback: true,
    //当使用 HTML5 History API 时，任意的 404 响应都可能需要被替代为 index.html

  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // 开启全局的模块热替换(HMR)

    new webpack.NamedModulesPlugin(),
    // 当模块热替换(HMR)时在浏览器控制台输出对用户更友好的模块名字信息

    new ExtractTextPlugin("main.css"),

    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true,
    }),
  ]
}
