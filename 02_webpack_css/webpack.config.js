const path = require('path');

// 导出配置信息
module.exports = {
  entry: "./src/main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "./dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 写法一：语法糖
        // loader: "css-loader"

        // 写法二
        // use: [
        //   {loader: "css-loader"}
        // ]

        // 写法三：
        use: [
          "style-loader",
          "css-loader",
        ]
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          "less-loader"
        ]
      }
    ]
  }
}