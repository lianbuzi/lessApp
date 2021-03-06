
var path=require('path');
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var loaders=[

 {
 	loader:'css-loader',
 	options:{
 		modules:false,
 		 minimize: true ,//css压缩
 		  sourceMap: false

 	}
 },
 {
 	loader:'less-loader',
 }
]
module.exports= {
    entry: [ './index2.js'],
    output: {
        path: path.resolve(__dirname, './produce'),
        filename: 'js/index.js',
        publicPath:''
    },

    module: {
         rules: [
         	{
				test:/\.js$/,
				loader:'babel-loader',
				exclude:path.resolve(__dirname,'node_modules'),

			},
			{
				test:/\.(less|css)$/,
				loader:ExtractTextPlugin.extract({ fallback: 'style-loader', use:loaders })

			}
			
  		],

    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin({
            filename: './css/index.css',
            disable: false,
            allChunks: true
        })
    ]
}