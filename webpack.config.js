const path = require("path");

module.exports = {
  entry: "./src/index.js",
  mode: 'development',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "ReactNavs",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
