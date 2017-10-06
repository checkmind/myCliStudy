const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/main.js',
	output : {
		path : __dirname + '/build/',
		filename : "bundle.js"
	},
	devServer : {
		contentBase : "./public",
		historyApiFallback : false, //单页面应用，不跳转
		inline : true	
	},
	module : {
		loaders : [{
			test: /\.js$/,
			use : {
				loader : "babel-loader"
			},
			exclude : /node_modules/
		},{
			test: /(\.less|\.css)$/,
			use : [{
				loader : "style-loader"
			},{
                loader: "css-loader",
                options: {
                   // modules: true
                }
            },{
            	loader : "less-loader"
            }]
		}]
	},
	plugins : [
		new HtmlWebpackPlugin({
			template : './app/index.tmpl.html',
			hash : true,
			minify :  {
		        "removeAttributeQuotes": true,
		        "removeComments": true,
		        "removeEmptyAttributes": true
		    }
		}),new webpack.optimize.UglifyJsPlugin({
	      compress: {
	        warnings: false
	      }
	    })
	]
}