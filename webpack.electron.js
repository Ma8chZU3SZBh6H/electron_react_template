const path = require("path");

const MODE = process.env.MODE ?? "development";

module.exports = {
  mode: MODE,
  entry: "./src/backend/main.ts",
  target: "electron-main",
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /.(ts|tsx)$/,
        exclude: /node_modules/,
        include: [path.join(__dirname, "/src/backend")],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-typescript"],
            },
          },
        ],
      },
    ],
  },
  output: {
    path: path.join(__dirname, "./dist/backend"),
    filename: "main.js",
  },
};
