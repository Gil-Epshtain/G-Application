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
    context: __dirname + '/www',

    // App Entry Point:
    entry: './App/App.js',

    // Output file (bundle):
    output:
    {
        path: './dist',
        filename: 'script.js'
    },

    // enable loading modules relatively
    resolve:
    {
        root: [__dirname + "/www"]
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
            // Fonts
            {
                test: /\.(ttf|eot|svg|otf)$/,
                exclude: /node_modules/,
                loader: "file"
            },
            {
                test: /\.woff(2)?$/,
                exclude: /node_modules/,
                loader: "url?limit=10000&minetype=application/font-woff"
            }
        ]
    },

    // support source maps
    devtool: "#inline-source-map"

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
