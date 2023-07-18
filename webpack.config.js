const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = (_, options) => {
  const ENV = options.mode;
  const isEnvDevelopment = ENV === "development";
  const isEnvProduction = ENV === "production";
  return {
    target: ['es2021'],
    entry: "./src/index.tsx",
    mode: isEnvProduction ? "production" : "development",
    devtool: isEnvProduction ? "source-map" : "cheap-module-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      chunkFormat: 'module',
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin(),
      isEnvDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
      static: {
        directory: path.resolve(__dirname, "dist"),
      },
      // devMiddleware: {
      //   stats: "minimal",
      // },
      hot: true,
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
};
