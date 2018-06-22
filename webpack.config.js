const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "main.js"
    },
    devtool: "source-map",
    devServer: {
        contentBase: path.join(__dirname, ''),
        port: 9000
    }
};
