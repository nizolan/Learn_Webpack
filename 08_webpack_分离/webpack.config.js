const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { DefinePlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader/dist/index")

// 导出配置信息
module.exports = {
  target: "web",
  mode: "development",
  devtool: "source-map",
  entry: "./src/main.js",
  output: {
    filename: "js/bundle.js",
    path: path.resolve(__dirname, "./build")
  },
  devServer: {
    // contentBase: "./public",
    static: "./public",
    hot: true,
    host: "0.0.0.0",
    port: 8888,
    open: true,
    // comporess: true,
    proxy: {
      "/api": {
        target: "http://localhost:8888",
        pathRewrite: {
          "^/api": ""
        },
        secure: false,
        changeOrigin: true
      }
    }
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
        use: {
          loader: "babel-loader",
        }
      },
      {
        test: /\.vue$/,
        use: {
          loader: "vue-loader",
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      title: "哈哈哈哈"
    }),
    new DefinePlugin({
      BASE_URL: "'./'",
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "public",
          to: "./",
          globOptions: {
            ignore: [
              "**/index.html"
            ]
          }
        }
      ]
    }),
    new VueLoaderPlugin()
  ]
}