const path = require( 'path' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const webpack = require( 'webpack' );

// PostCSS plugins
const cssnext = require( 'postcss-cssnext' );
const postcssFocus = require( 'postcss-focus' );
const postcssReporter = require( 'postcss-reporter' );

var config = {
	entry: {
		app: [ 'babel-polyfill', path.join( __dirname, 'src', 'index.js' ) ],
	},
	output: {
		path: path.join( __dirname, 'public_html', 'meet2' ),
		filename: '[name].js',
		publicPath: '/meet2/'
	},
	module: {
		noParse: /node_modules\/aframe\/dist\/aframe.js/,
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
		new webpack.NoErrorsPlugin(),
		new HtmlWebpackPlugin( { title: 'Meet-a-Tinker', template: path.join( 'src', 'index.ejs' ) } ),
		new webpack.ProvidePlugin( { React: 'react' } ),
		new webpack.DefinePlugin( { 'process.env': { NODE_ENV: JSON.stringify( process.env.NODE_ENV || 'development' ) } } )
	],
	postcss: () => [
		postcssFocus(),
		cssnext( {
			browsers: [ 'last 2 versions', 'IE > 10' ],
		} ),
		postcssReporter( {
			clearMessages: true
		} ),
	],
	devServer: {
		historyApiFallback: {
			index: '/meet2/'
		},
		stats: {
			colors: true,
			hash: false,
			version: true,
			timings: true,
			assets: true,
			chunks: false,
			modules: false,
			reasons: false,
			children: false,
			source: false,
			errors: true,
			errorDetails: true,
			warnings: false,
			publicPath: false
		}
	}
};

if ( process.env.NODE_ENV === 'production' ) {
	config.plugins.push( new webpack.optimize.UglifyJsPlugin( { compress: { warnings: false } } ) );
	config.plugins.push( new webpack.optimize.DedupePlugin() );
} else {
	config.devtool = 'cheap-module-eval-source-map';
	config.plugins.push( new webpack.optimize.CommonsChunkPlugin( { name: 'common' } ) );
	config.entry.app.push( 'webpack-dev-server/client?http://0.0.0.0:3312' );
	config.entry.app.push( 'webpack/hot/only-dev-server' );
	config.entry.common = [ 'react', 'aframe', 'aframe-react', 'lodash', 'react-redux', 'redux', 'aframe-extras', 'aframe-text-component', 'sockjs-client' ];
}

module.exports = config;
