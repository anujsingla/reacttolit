const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

// hot module refresh is not working in web component

module.exports = (_, options) => {
  const ENV = options.mode;
  const isEnvDevelopment = ENV === "development";
  const isEnvProduction = ENV === "production";
  return {
    target: ["es2021"],
    entry: "./src/index.ts",
    mode: isEnvProduction ? "production" : "development",
    devtool: isEnvProduction ? "source-map" : "cheap-module-source-map",
    output: {
      path: path.resolve(__dirname, "dist"),
      filename: "bundle.js",
      publicPath: "/",
      chunkFormat: "module",
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
    },
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader"],
          issuer: {
            not: /webcomponents/,
          },
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "ts-loader",
          },
        },
        {
          test: /\.css$/,
          loader: "lit-css-loader",
          issuer: /webcomponents/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "index.html",
      }),
      new MiniCssExtractPlugin(),
      // isEnvDevelopment && new ReactRefreshWebpackPlugin(),
    ].filter(Boolean),
    devServer: {
      // static: {
      //   directory: path.resolve(__dirname, "dist"),
      // },
      // devMiddleware: {
      //   stats: "minimal",
      // },
      hot: false,
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
  };
};
