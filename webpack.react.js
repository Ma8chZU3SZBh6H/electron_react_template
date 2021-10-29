const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const TARGET = process.env.TARGET ?? "electron-renderer";

module.exports = {
  mode: "development",
  entry: "./src/frontend/index.tsx",
  target: TARGET,
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, "/src/frontend")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript", "@babel/preset-react"],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "/dist/frontend"),
    filename: "index.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  performance: {
    maxAssetSize: 100000,
    maxEntrypointSize: 100000,
    hints: false,
  },
};
