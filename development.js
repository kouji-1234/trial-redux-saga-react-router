import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin'

const src  = path.resolve(__dirname, 'src')
const dist = path.resolve(__dirname, 'dist')

export default [
  {
    //ビルド元のファイル
    entry: {
      bundle: src + '/index.jsx'
    },
    //ビルド先のファイル
    output: {
      path: dist,
      filename: '[name].js'
    },

    module: {
      //js以外のファイルもjsに変換して読み込むことを可能にする
      loaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query:{
            presets: ['react', 'es2015', 'react-hmre']
          },
        },
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader',
        },
        {
          test: /\.scss$/,
          loader: 'style-loader!css-loader!sass-loader',
        }
      ],
      preLoaders: [
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: "eslint-loader"
        }
      ]
    },
    //読み込む際に拡張子を省略
    resolve: {
      extensions: ['', '.js', '.jsx', 'css']
    },
    devServer: { 
      contentBase: dist,
      inline: true,
      hot: true,
      port: 8080
    },
    eslint: {
      configFile: './.eslintrc.json'
    },
    //HMR設定　ファイル更新時に自動ロード
    plugins: [
      new HtmlWebpackPlugin({
        template: src + '/index.html',
        filename: 'index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
  }
]