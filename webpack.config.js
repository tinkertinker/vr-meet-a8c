const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );

// PostCSS plugins
const cssnext = require( 'postcss-cssnext' );
const postcssFocus = require( 'postcss-focus' );
const postcssReporter = require( 'postcss-reporter' );

var config = {
	devtool: 'cheap-module-eval-source-map',
	entry: {
		app: [ path.join( __dirname, 'src', 'index.js' ) ],
		common: [ 'react', 'aframe', 'aframe-react', 'lodash' ]
	},
	output: {
		path: path.join( __dirname, 'public_html' ),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{ test: /\.jsx?$/, exclude: /node_modules/, loaders: [ 'babel-loader' ] },
			{ test: /\.scss$/, exclude: /node_modules/, loader: 'style-loader!css-loader!postcss-loader!sass-loader' },
			{ test: /\.json$/, loader: 'json-loader' }
		]
	},
	resolve: {
		extensions: [ '', '.js', '.jsx', '.json', '.scss', '.css' ],
		modulesDirectories: [ __dirname, 'src', 'node_modules' ],
	},
	plugins: [
		new webpack.optimize.CommonsChunkPlugin( { name: 'common' } ),
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin( { title: 'Meet-a-Tinker', template: path.join( 'src', 'index.ejs' ) } ),
		new webpack.ProvidePlugin( { React: 'react' } ),
		new webpack.DefinePlugin( { 'process.env': { NODE_ENV: JSON.stringify( process.env.NODE_ENV ) } } )
	],
	devServer: {
		historyApiFallback: true
	},
	postcss: () => [
		postcssFocus(),
		cssnext( {
			browsers: [ 'last 2 versions', 'IE > 10' ],
		} ),
		postcssReporter( {
			clearMessages: true
		} ),
	]
};

// XXX get rid of WebGL warnings - transparent
// XXX transition between scenes
// XXX initial page
// XXX react router to control places

if ( process.env.NODE_ENV === 'production' ) {
	config.plugins.push( new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } ) );
	config.plugins.push( new webpack.optimize.DedupePlugin() );
} else {
	config.entry.app.push( 'webpack-dev-server/client?http://0.0.0.0:3312' );
	config.entry.app.push( 'webpack/hot/only-dev-server' );
}

module.exports = config;
