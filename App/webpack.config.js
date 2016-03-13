/* Created by Gil on 26/02/2016 */

// $ npm install x-webpack-loader -D
// -S is '--save'     Package will appear in your dependencies.
// -D is '--save-dev' Package will appear in your devDependencies.

// Cordova Plugin
//var CordovaPlugin = require('webpack-cordova-plugin');

// WebPack Configuration
module.exports =
{
    // Working Directory:
    context: __dirname + '/source',

    // App Entry Point:
    entry: './App/App.js',

    // Output file (bundle):
    output:
    {
        // Use www as output for cordova input
        path: './www',
        filename: 'script.js'
    },

    // enable loading modules relatively
    resolve:
    {
        root: [__dirname + "/source"]
    },

    module:
    {
        loaders:
        [
            // ES6 (JS)
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:"babel-loader",
                query:
                {
                    presets: ['es2015']
                }
            },
            // Html
            {
                test: /\.html$/,
                exclude: /node_modules/,
                loader:"raw"
            },
            // Less (CSS)
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: "style!css!less"
            },
            // Json
            {
                test: /\.json$/,
                exclude: /node_modules/,
                loader: "json"
            },
            // Fonts //
            {
                test: /\.(ttf|eot|otf)$/,
                exclude: /node_modules/,
                loader: "file"
            },
            {
                test: /\.woff(2)?$/,
                exclude: /node_modules/,
                loader: "url?limit=10000&minetype=application/font-woff"
            },
            // Images
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                exclude: /node_modules/,
                loaders:
                [
                    'file?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }

        ]
    },

    // support source maps
    devtool: "#inline-source-map"

    // Use this plugin only first time to create config.xml file.
    //plugins:
    //[
    //    new CordovaPlugin(
    //        {
    //            config:   'config.xml', // Location of Cordova' config.xml (will be created if not found)
    //            src:      'index.html', // Set entry-point of cordova in config.xml
    //            platform: 'android',    // ('android' or 'ios') Set `webpack-dev-server` to correct `contentBase` to use Cordova plugins.
    //            version:  true          // Set config.xml' version. (true = use version from package.json)
    //        })
    //]
};