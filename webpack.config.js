const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.scss'],
    alias: {
      src: './src',
      Components: './src'
    }
  },
  mode: 'production',
  externals: {
    react: {
      root: 'React',
      commonjs2: 'react',
      commonjs: 'react',
      amd: 'react',
    },
  },
  module: {
    rules: [
      {
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [autoprefixer()],
              }
            },
          },
          { loader: 'sass-loader' }
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {},
        extractComments: {
          condition: /^\**!|@preserve|@license|@cc_on/i,
          filename: (fileData) => {
            // The "fileData" argument contains object with "filename", "basename", "query" and "hash"
            return `${fileData.filename}.LICENSE.txt${fileData.query}`;
          },
          banner: (licenseFile) => {
            return (
              `\n * Dish UI ${require('./package.json').version}` +
              `\n * MIT License` +
              `\n *` +
              `\n * More license information can be found in ${licenseFile}\n`
            );
          },
        },
      }),
      new webpack.BannerPlugin(
        `Dish UI v${require('./package.json').version}\nMIT License`
      ),
    ],
  },
};
