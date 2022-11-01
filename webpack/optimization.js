
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

let optimization= {
  splitChunks: {
    cacheGroups: {
      styles: {
        name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
      }
    }
  },
  minimizer: [
    new OptimizeCssAssetsPlugin({
      cssProcessor: require('cssnano'),
      cssProcessorOptions: { discardComments: { removeAll: true }, safe: true},
      canPrint: true
    })
  ]
};

module.exports= optimization;
