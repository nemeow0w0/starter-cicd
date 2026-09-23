const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BUILD_DIR = path.resolve(__dirname, 'build');
module.exports = (env = {}) => {
 return {
  mode: env.prod ? 'production' : 'development',
  entry: {
   index: './index.js'
  },
  output: {
   path: BUILD_DIR,
   filename: '[contenthash].bundle.js',
   clean: true
  },
  resolve: {
   extensions: ['.js', '.jsx']
  },
  devtool: env.prod ? 'source-map' : 'eval-cheap-module-source-map',
  devServer: {
   static: BUILD_DIR,
   port: 9090,
   compress: true,
   hot: true,
   open: true,
   headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
   },
   historyApiFallback: true
  },
  module: {
   rules: [
    {
     test: /\.(js|jsx)$/,
     exclude: /node_modules/,
     use: {
      loader: 'babel-loader',
      options: { cacheDirectory: true }
     }
    }
   ]
  },
  plugins: [
   new HtmlWebpackPlugin({
    inject: true,
    template: './src/index.html'
   })
  ],
  optimization: {
   splitChunks: {
    chunks: 'all'
   }
  }
 }
};
