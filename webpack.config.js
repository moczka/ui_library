const path = require('path');
/* Plugins */
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const autoPrefixer = require('autoprefixer');

const isDevelopment = process.env.NODE_ENV === 'development';

// @TODO: Make webpack configuration file DRY by separating out set up.

const browserConfig = {
    mode: isDevelopment ? "development" : "production",
    /* Sets the entry point directory (All of our source files go into it) */
    context: path.resolve(__dirname, 'src/client'),
    entry: './js/main.js',
    output: {
        filename: 'bundle.js',
        /* Sets the output point directory (All of our build files go into it) */
        path: path.resolve(__dirname, 'dist/client')
    },
    devtool: isDevelopment && "source-map",
    resolve: {
        extensions: [".js", ".jsx"],
        /* Helps avoid absolute paths */
        alias: {
            _components: path.resolve(__dirname, 'src/client/js/react/components'),
            _routes: path.resolve(__dirname, 'src/client/js/react/routes'),
            _constants: path.resolve(__dirname, 'src/client/js/constants'),
            _library: path.resolve(__dirname, 'src/client/js/react/library'),
            _data: path.resolve(__dirname, 'src/data'),
            _utilities: path.resolve(__dirname, 'src/common/utilities'),
            _styles: path.resolve(__dirname, 'src/client/styles'),
            _assets: path.resolve(__dirname, 'src/client/assets'),
            _apis: path.resolve(__dirname, 'src/common/apis')
        },
        modules: [path.resolve(__dirname, "src/client/js"), "node_modules"]
    },
    module: {
        /* Looks for all sass files being imported by React components */
        rules: [
            {
                test: /\.scss$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                // If you are having trouble with urls not resolving add this setting.
                                // See https://github.com/webpack-contrib/css-loader#url
                                url: false,
                                sourceMap: true
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                // Meant to add CSS browser prefixes to properties not widely supported.
                               sourceMap: true,
                               plugins: [autoPrefixer()]
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                sourceMap: true
                            }
                        }
                    ]
                  })
            },
            {
                test: /\.js$|\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ["react-app"]
                    }
               }
            }
        ]
    },
    plugins: [
        /* Combines all the sass files being imported into one. */
        new ExtractTextPlugin('styles/main.css'),
        /* Copies all the files in source directory assets to production */
        new CopyWebpackPlugin([
          {
            from: 'assets', to: 'assets'
          },
          {
            from: 'index.html', to: 'index.html'
          }
        ])
    ],
    /* Runs development server */
    devServer: {
        open: true,
        contentBase: path.join(__dirname, "dist/client"),
        compress: true,
        port: 8080
    }
};

module.exports = [browserConfig];