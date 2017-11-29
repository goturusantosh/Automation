var keyword = require('../libs/genericKeywords.js');
var data = require('../test_data/global_data.js');
var commonTest = require('../libs/commonTest.js');

module.exports = {
    '@tags' : ['smoke','MyAccount','Regression'],
    'My Account' : function (browser) {
        commonTest.loginToApp(browser, function(){});
         keyword.clickElement('pageDashBoard|linkWelcome', function(){
          keyword.expectVisibility('pageMyAccount|linkMyAccount',function(){
            keyword.markCheckBoxOrRadio('PageCreateAddress|ShippingAndBilling',function(){
             keyword.setText('pageEditAddress|inputFirstname',function(){
                 keyword.selectByIndex('pageEditAddress|inputState',46 ,function(){
                    keyword.setText('pageEditAddress|inputLastname',function(){
                        keyword.setText('pageEditAddress|inputStreetAddress',function(){
                            keyword.setText('pageEditAddress|inputCity',function(){
                                keyword.setText('pageEditAddress|inputZip',function(){
                                    keyword.setText('pageEditAddress|inputEmail',function(){
                                        keyword.setText('pageEditAddress|inputPhoneNumber',function(){
                                            keyword.clickElement('pageEditAddress|buttonSubmit',function(){

                                        });
                                    });
                                });
                            });
                        });
                    });
                 });
             });
             });



            keyword.clickElement('pageMyAccount|linkViewOrders',function(){
            });
            });
        });
        });
    }  

};