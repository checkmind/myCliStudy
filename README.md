# myCliStudy
webpack 
##  记录一些工具从0开始的搭建过程  
每次项目的提交就是一次完整的搭建。  
项目提交顺序：  
 - webpack搭建  
 - babel在webpack中配置  
主要参考了以下链接：  
[点我跳转](http://www.jianshu.com/p/42e11515c10f)    
run dev server  //启动webpack devServer 修改文件自动刷新页面  
webpack的配置文件：  
```
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
其中devtool是文件map信息，可以很方便我们对于代码文件的调试，它有四个参数，  
分别是：  
- source-map：	在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；  
- cheap-module-source-map	在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；  
- eval-source-map	使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；  
- cheap-module-eval-source-map 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；  


