const path = require("path");
const nodeExternals = require("webpack-node-externals");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = (env, argv) => {
  return {
    target: "node",
    devtool: env.production ? "source-map" : "eval",
    mode: env.production ? "production" : "development",
    entry: {
      server: "./src/server.ts",
    },
    output: {
      path: path.join(__dirname, "dist"),
      filename: "[name].js",
    },
    externals: [nodeExternals()],
    module: {
      rules: [
        {
          test: /.ts?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".js"],
      alias: {
        '@': path.resolve(__dirname, "src"),
      },
    },
    plugins: [new CleanWebpackPlugin()],
  };
};
