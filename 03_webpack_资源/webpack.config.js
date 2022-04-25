const path = require('path');

// 导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./build"),
    // assetModuleFilename: "img/[name]_[hash:6][ext]"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   use: {
      //     // loader: "file-loader",
      //     loader: "url-loader",
      //     options: {
      //       limit: 100 * 1024,
      //       name: "[name]_[hash:6].[ext]",
      //       outputPath: "img"
      //     }
      //   }
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg)$/,
      //   type: "asset/resource",
      //   generator: {
      //     filename: "img/[name]_[hash:6].[ext]"
      //   }
      // },
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
      }
    ]
  }
}