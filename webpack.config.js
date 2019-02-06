module.exports = {
  entry: [
    './src/entry.js',
    // './src/main.css'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "script-loader"
        }
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: "style-loader"
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         modules: true,
      //         importLoaders: 1,
      //         localIdentName: "[name]_[local]_[hash:base64]",
      //         sourceMap: true,
      //         minimize: true
      //       }
      //     }
      //   ]
      // }
    ]
  }
};

// const path = require('path');

// module.exports = {
//   context: __dirname,
//   entry: "./src/javascript/board.js",
//   output: {
//     path: path.resolve(__dirname),
//     filename: "bundle.js"
//   },
//   module: {
//     rules: [
//       {
//         // test: /\.jsx?$/,
//         test: /\.js?$/,
//         exclude: /(node_modules)/,
//         use: {
//           loader: 'babel-loader',
//           query: {
//             presets: ['@babel/env', '@babel/react']
//           }
//         },
//       }
//     ]
//   },
//   devtool: 'source-map',
//   resolve: {
//     extensions: [".js", ".jsx", "*"]
//   }
// };