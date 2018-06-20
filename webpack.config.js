const path = require('path');

module.exports = {
    mode: 'development',
    entry: "./src/index.ts",
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
