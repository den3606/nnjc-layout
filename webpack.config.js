module.exports = {
  entry: {
    'dashboard/scripts/playerSelect': './src/dashboard/playerSelect.js',
    'dashboard/scripts/playerListUploader': './src/dashboard/playerListUploader.js',
    'graphics/scripts/index': './src/graphics/index.js',
  },
  mode: 'development',
  output: {
    path: __dirname,
    filename: '[name].bundle.js',
  },
  cache: true,
  resolve: {
    fallback: {
      "stream": false,
      "buffer": false,
    }
  }
};
