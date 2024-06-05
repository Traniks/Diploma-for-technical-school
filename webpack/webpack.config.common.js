const path = require('path')
const HtmlBundlerPlugin = require('html-bundler-webpack-plugin')
// const CopyPlugin        = require("copy-webpack-plugin");

module.exports = {
	mode: 'development',
	output: {
		path: path.join(process.cwd(), 'dist/'),
		clean: true,
	},

	plugins: [
		new HtmlBundlerPlugin({
			entry: {
				index: './src/pages/index/index.html',
				about: './src/pages/about/about.html',
				program: './src/pages/program/program.html',
				faq: './src/pages/faq/faq.html',
				contact: './src/pages/contact/contact.html',
				gallery: './src/pages/gallery/gallery.html',
			},
			js: {
				filename: 'assets/js/[name].js',
			},
			css: {
				filename: 'assets/css/[name].css',
			},
		}),
		// new CopyPlugin({
		// 	patterns: ['public'],
		// }),
	],

	module: {
		rules: [
			{
				test: /\.html$/,
				loader: HtmlBundlerPlugin.loader,
			},
			{
				test: /\.(css|sass|scss)$/,
				use: ['css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpe?g|svg|ico|webp)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/img/[name].[hash:8][ext]',
				},
			},
			{
				test: /\.(woff2?|eot|ttf)/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name].[hash:8][ext]',
				},
			},
		],
	},

	devServer: {
		static: {
			directory: path.join(process.cwd(), 'dist'),
		},
		watchFiles: {
			paths: ['src/**/*.*'],
			options: {
				usePolling: true,
			},
		},
	},
}
