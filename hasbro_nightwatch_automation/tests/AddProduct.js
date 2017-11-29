var keyword = require('../libs/genericKeywords.js');
var data = require('../test_data/global_data.js');
var commonTest = require('../libs/commonTest.js');
var credit = require('../test_data/payment.js');

module.exports = {
    '@tags' : ['smoke','addCart','Regression'],
    'Add to Cart' : function (browser) {
        commonTest.loginToApp(browser, function(){});
           keyword.clickElement('pageHome|linkHeaderBrand', function(){
            keyword.clickElement('pageHome|linkHeaderBrandDropDown', function(){
                keyword.expectVisibility('pageGrid|linkGrid',function(){
                    keyword.clickElement('pageGrid|linkGridProduct',function(){
                        browser.pause(2000);
                        keyword.clickElement('pageGrid|linkGotoCartButton',function(){
                            keyword.expectVisibility('pageShoppingCart|linkShoppingCart',function(){
                                removeOtherProductInCard(browser, "pageShoppingCart|linkRemoveArray", function(){
                                    keyword.clickElement('pageShoppingCart|linkCheckoutButton',function(){
                                        keyword.expectVisibility('pageShipping|linkShippingInfo',function(){
                                            keyword.clickElement('pageShipping|linkNextButton',function(){
                                                enterPaymentDetails(browser, function(){});
                                            });
                                        });  
                                    });
                                });
                            });
                        });
                    })
                });
            });
        });
    }
}

function enterPaymentDetails(browser, callback){
    keyword.switchFrameById("payment", function(){
        keyword.setText('pagePayment|inputCreditcard',credit.Card_number,function(){
            keyword.setText('pagePayment|inputCvv', credit.Security_code,function(){
                keyword.selectByVisibleText('pagePayment|dropDownMonth',credit.Expiration_Month,function(){
                    keyword.selectByVisibleText('pagePayment|dropDownYear',credit.Expiration_Year,function(){
                        keyword.clickElement('pagePayment|buttonContinue', function(){
                            keyword.switchToParentFrame(function(){
                                callback(); 
                            });
                        });
                    });
                });
            });
        });
    });
}

function removeOtherProductInCard(browser, locator, callback){
    keyword.fetchLocator(locator, function(objLocator){
        browser.elements(objLocator.locateStrategy, objLocator.locator, function(objArr){
            //console.log(objArr.value.length);
            var length = objArr.value.length;
            if(length > 1){
                browser.elementIdClick(objArr.value[0].ELEMENT);
                browser.pause(2000);
                removeOtherProductInCard(browser, locator, function(){callback();})
            }else{
                callback();
            }
        });
    });
}