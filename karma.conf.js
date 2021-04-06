module.exports = function(config) {
  config.set({
    files: ['test-dist/tests.bundle.js'],
    frameworks: ['mocha', 'chai'],
    plugins: [
       require("karma-chrome-launcher"),
       require("karma-mocha"),
       require("karma-chai") // i.e karma-mocha, karma-webpack etc
    ],
    reporters: ['progress'],
    port: 9876,  // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity
  })
}
