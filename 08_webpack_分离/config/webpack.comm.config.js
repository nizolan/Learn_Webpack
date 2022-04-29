const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const { VueLoaderPlugin } = require("vue-loader/dist/index")

module.exports = {
  target: "web",
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  resolve: {
    extensions: [".js", ".json", ".mjs", ".vue", ".ts", ".jsx", ".tsx"],
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "js": path.resolve(__dirname, "./src/js")
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        type: "asset",
        generator: {
          filename: "img/[name]_[hash:6].[ext]"
        },
        parser: {
          dataUrlCondition: {
            maxSize: 100 * 1024
          }
        }
      },
      {
        test: /\.(woff2?|eot|ttf)$/,
        type: "asset/resource",
        generator: {
          filename: "font/[name]_[hash:6].[ext]"
        }
      },
      {
        test: /\.m?js$/,
        loader: "babel-loader",
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin()
  ]
}