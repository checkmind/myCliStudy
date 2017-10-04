module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/main.js',
	output : {
		path : __dirname + '/public/',
		filename : "bundle.js"
	},
	devServer : {
		contentBase : "./public",
		historyApiFallback : false, //单页面应用，不跳转
		inline : true	
	},
	module : {
		rules : [{
			test: /(\.jsx|\.js)$/,
			use : {
				loader : "babel-loader",
				options : {
					presets : ['es2015']
				}
			},
			exclude : /node_modules/
		}]
	}
}