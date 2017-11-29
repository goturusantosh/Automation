var seleniumServer = require('selenium-server');
var chromeDriver = require('chromedriver');

module.exports = {
  "src_folders" : ["./tests"],  // location of test scripts box bracket to give more number of folders
  "output_folder" : "reports", // location of test Reports 
  "custom_commands_path" : "",
  "custom_assertions_path" : "",
  "page_objects_path" : "", // page object location if used pom model
  "globals_path" : "./libs/TestExecListener.js", // global variable setup

  "selenium" : {
    "start_process" : true,
    "server_path" : seleniumServer.path,
    "log_path" : "",
    "port" : 4444,
    "globals" : {
      "browser" : this
    },
    "cli_args" : {
      "webdriver.chrome.driver" : chromeDriver.path,
      "webdriver.gecko.driver" : "",
      "webdriver.edge.driver" : ""
    }
  },

  "test_settings" : {
    "default" : {
      "launch_url" : "http://localhost",
      "selenium_port"  : 4444,
      "selenium_host"  : "localhost",
      "silent": true,
      "screenshots" : {
        "enabled" : false,
        "path" : ""
      },
      "desiredCapabilities": {
        "browserName": "chrome",
        "marionette": true
      }
    },

    "chrome" : {
      "desiredCapabilities": {
        "browserName": "chrome"
      }
    },

  },
  

  // // External before hook is ran at the beginning of the tests run, before creating the Selenium session
  // before: function(done) {
  //   // run this only for the local-env
  //   if (this.isLocal) {
  //     // start the local server
  //     App.startServer(function() {
  //       // server listening
  //       done();
  //     });
  //   } else {
  //     done();
  //   }
  // },

  // // External after hook is ran at the very end of the tests run, after closing the Selenium session
  // after: function(done) {
  //   // run this only for the local-env
  //   if (this.isLocal) {
  //     // start the local server
  //     App.stopServer(function() {
  //       // shutting down
  //       done();
  //     });
  //   } else {
  //     done();
  //   }
  // },

  // // This will be run before each test suite is started
  // beforeEach: function(browser, done) {
  //   // getting the session info
  //   browser.status(function(result) {
  //     console.log('Before the test code');
  //     done();
  //   });
  // },

  // // This will be run after each test suite is finished
  // afterEach: function(browser, done) {
  //   console.log('After the test code');
  //   done();
  // }

}