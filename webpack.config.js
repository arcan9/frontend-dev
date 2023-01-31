module.exports = {
  mode: "none",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node-modules/,
        use: {
          loader: "babel-loader",
          options: {
            plugins: [
              "@babel/plugin-transform-block-scoping",
              "@babel/plugin-transform-arrow-functions",
              "@babel/plugin-transform-react-jsx"
            ]
          }
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  performance: {
    hints: false
  }
};
