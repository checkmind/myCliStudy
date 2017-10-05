# myCliStudy
webpack 
##  记录一些工具从0开始的搭建过程  
以下项目的提交就是一次完整的搭建。  
项目提交顺序：  
 - webpack搭建  
 - babel在webpack中配置  
 - less-loader css-loader style-loader安装 
run dev server  //启动webpack devServer  
修改文件自动刷新页面  
### webpack搭建
webpack的配置文件：  
```javascript
module.exports = {
	devtool : 'eval-source-map',
	entry : __dirname + '/app/main.js',
	output : {
		path : __dirname + '/public/',
		filename : "bundle.js"
	},
	devServer : {
		contentBase : "./public",
		historyApiFallback : true, //单页面应用，不跳转
		inline : true	
	}
}
```

### 第一次提交主要是webpack的简单配置，  
其中devtool是文件map信息，可以很方便我们对于代码文件的调试，它有四个参数，  
分别是：  
- source-map：	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；  
- cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；  
- eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；  
- cheap-module-eval-source-map 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；  
entry是入口文件，这是webpack的模块加载与AMD或是CMD不同的地方，模块的依赖需要一个入口文件，在入口文件里在去请求别的模块。  
而AMD或是CMD是配置好所有需要加载的模块，再去异步请求。在这个项目中，入口文件便是main.js，这是不变的。  
output是输出文件，就是webpack打包后的文件，需要index.html引用。  
devServer是一个脚手架，方便我们在开发阶段进行调试，改变代码同时服务器刷新页面，不需要我们手动刷新。它的运行命令在package.json中可以找到。  
### 第二次提交是babel的简单配置。  
配置babel前需要安装一些babel的依赖包。  
npm install --save-dev babel-core babel-loader babel-preset-es2015  
安装完毕后新建一个.bebelrc文件，bebel的配置也可以写在webpack.config.js中，但项目中可能该文件会逐渐变大，所以将其从webpack解耦开来。  
``` javascript
{
	"presets" : ['es2015']
}
```
此时webpack.config.js会变为。    
```javascript
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
            		
			}]
	}
}
```
这里用了loader，加载js时调用babel处理。这样，就会将es6代码转化为es5。这样模块的导入导出就用es6的模块方法：  
import和export
### 第三次提交 less-loader css-loader style-loader安装 
npm install --save-dev style-loader css-loader less-loader less
安装完毕后就可以通过请求css文件或者less文件的方式，将样式表插入到js代码中了，  
此时webpack的配置文件为：
```javascript
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
```
具体模块代码下载对应的commit就可以了。  

主要参考了以下链接:  

[点我跳转](http://www.jianshu.com/p/42e11515c10f) 
