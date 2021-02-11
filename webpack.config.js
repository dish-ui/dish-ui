const path = require('path');
module.exports = {
    entry: './src',
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'index.js'
    },
	resolve: {
		extensions: [
			'.ts',
			'.tsx',
			'.js',
			'.jsx',
			'.scss'
		]
	},
	mode: 'production',
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
							'@babel/preset-typescript'
						],
						plugins: [
							'@babel/plugin-proposal-class-properties'
						]
					}
				}
			},
			{
				test: /\.s[ac]ss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				]
			}
		]
	}
}
