const webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jquery-3.2.1', 'jasmine'],
    files: [
      'src/*.js',
      'spec/*spec.js'
    ],
    webpack: webpackConfig,
    exclude: [
    ],
    preprocessors: {
      'src/*.js': ['webpack', 'sourcemap', 'coverage'],
      'spec/*spec.js': ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-coverage',
      'karma-jquery',
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-jasmine-html-reporter',
      'karma-sourcemap-loader',
    ],
    reporters: ['progress', 'kjhtml', 'coverage'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity,
    coverageReporter: {
      instrumenterOptions: {
        istanbul: { noCompact: true }
      },
      includeAllSources: true,
      dir: 'coverage/',
      reporters: [
        { type: "html", subdir: "html" },
        { type: 'text-summary' }
      ]
    }

  });
};