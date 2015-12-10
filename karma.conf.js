// Karma configuration
// http://karma-runner.github.io/0.10/config/configuration-file.html

module.exports = function(config) {
  config.set({
    // base path, that will be used to resolve files and exclude
    basePath: '',

    // testing framework to use (jasmine/mocha/qunit/...)
    // frameworks: ['mocha', 'chai', 'sinon-chai'],
    frameworks: ['mocha', 'chai', 'sinon-chai'],

    reporters: ['spec', 'coverage'],


    // generate js files from html templates+
    preprocessors: {
      'app/modules/**/*.html': 'ng-html2js',
      'app/scripts/**/!(*.test)+(*.js)': ['coverage']
    },

    // needed if you have used the Yeoman's generator-angular or the app dir
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
    },

    coverageReporter: {
      reporters: [
        {type: 'html', dir:'coverage/'},
        {type: 'cobertura'},
        {type: 'text-summary'}
      ],
      watermarks: {
        statements: [ 50, 75 ],
        functions: [ 50, 75 ],
        branches: [ 50, 75 ],
        lines: [ 50, 75 ]
      }
    },


    // list of files / patterns to load in the browser
    files: [
      // application files
      "app/bower_components/angular/angular.js",
      "app/bower_components/angular-mocks/angular-mocks.js",
      "app/scripts/app.js",


      // test libs
      "test/lib/ngMidwayTester.js",
      "test/lib/fn-bind.js",
      "app/scripts/app.test.js",
    ],

    // list of files / patterns to exclude
    exclude: [],

    // web server port
    port: 9080,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_ERROR,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    //browsers: ['Chrome'],
    // browsers: ['PhantomJS'],

    captureTimeout: 6000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    browserNoActivityTimeout: 100000
  });
};
