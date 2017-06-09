var webpack = require('webpack');


module.exports = {
  entry: [
    // kalo regular script file pke script! sebelum filepathnya
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  // ini buat ngasi apa yang harus ada di external script files
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    // ini buat kyk auto require pas nemuin $ ato jQuery
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      Nav: 'app/components/Nav.jsx',
      applicationStyles: 'app/styles/app.scss',
      Timer: 'app/components/Timer.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Clock: 'app/components/Clock.jsx',
      CountdownForm: 'app/components/CountdownForm.jsx',
      Controls: 'app/components/Controls.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
