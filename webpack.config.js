const config = {
  mode: 'production',

  entry: {
    index: './src/js/index.js',
    catalog: './src/js/catalog.js',
    product: './src/js/product.js',
    article: './src/js/article.js',
    newAddress: './src/js/newAddress.js',
    createAccount: './src/js/createAccount.js',
    cart: './src/js/cart.js',
    wishlist: './src/js/wishlist.js',
    dashboard: './src/js/dashboard.js',
    editAccount: './src/js/editAccount.js',
  },

  output: {
    filename: '[name].bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};

module.exports = config;
