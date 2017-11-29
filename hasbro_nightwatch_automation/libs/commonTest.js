var data = require('../test_data/global_data.js');
var keyword = require('../libs/genericKeywords.js');

var loginToApp = function(browser, callback){
    browser
    .url(data.urls[data.TestingEnvironment])
    .maximizeWindow()
    .deleteCookies();

    keyword.isDisplayed("pageHome|linkSignIn",function(status){
        console.log(status);
        if(!status){
            keyword.clickElement("pageHome|linkQuick",function(){
                keyword.clickElement("pageHome|linkSignIn2", function(){
                    startLoginFlow(function(){});
                });
            });
        }else{
            keyword.clickElement("pageHome|linkSignIn", function(){
                startLoginFlow(function(){});
            });
        }
    });  
}

var startLoginFlow = function(callback){
    keyword.setText("pageLogin|inputUsername", data.users[data.TestingEnvironment].username, function(){});
    keyword.setText("pageLogin|inputPassword", data.users[data.TestingEnvironment].passwrod, function(){});
        keyword.markCheckBoxOrRadio("pageLogin|checkboxRememberMe",function(){
            keyword.clickElement("pageLogin|buttonSignIn", function(){
                keyword.expectVisibility("pageDashBoard|linkWelcome", function(){
                callback();
            });
        });
    });
}

exports.loginToApp = loginToApp;