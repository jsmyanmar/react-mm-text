const path = require('path');

module.exports = {
	entry: ['@babel/polyfill', './src/index.js'],
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
		libraryTarget: 'commonjs2'
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			}
		]
	},
	devtool: 'source-map'
};
