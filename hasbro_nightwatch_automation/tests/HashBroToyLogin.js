var keyword = require('../libs/genericKeywords.js');
var data = require('../test_data/global_data.js');
var commonTest = require('../libs/commonTest.js');

module.exports = {
    '@tags' : ['smoke','login','Regression'],
    'Login to HasBroToyShop' : function (browser) {
       commonTest.loginToApp(browser, function(){});
     }
}