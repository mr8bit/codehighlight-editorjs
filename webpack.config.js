module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            query: {
              presets: [ '@babel/preset-env' ],
            },
          },
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  output: {
    path: '/home/mr9bit/work/lambda-react-redux/src/static/components/EditorJS Plugin/codehighlight-editorjs/dist',
    filename: 'code_highlight.js',
    library: 'CodeHighlight',
    libraryTarget: 'umd'
  }
};
