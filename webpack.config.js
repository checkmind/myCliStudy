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
	}
}