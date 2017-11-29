//var browser = globals.browser;
var object = require('../locators/locatorsHashBroApp.js');
var data = require('../test_data/global_data.js');
var browser = this;

var setBrowser = function(browser_context, callback){
    browser = browser_context;
    callback();
};

var selectByVisibleText = function(locator_info, selectionText, callback){
    fetchLocator(locator_info, function(objLocator){
        if(objLocator.locateStrategy=='xpath')
            locator_options = objLocator.locator + '/option';
        else
            locator_options = objLocator.locator + ' option';
        var i =0, len, dd_val;
        browser.click(objLocator.locator, function(){
            browser.pause(data.shortWait)
            browser.elements(objLocator.locateStrategy, locator_options, function(ele_array){
                len = ele_array.value.length;
                ele_array.value.forEach(function(element) {
                    browser.elementIdText(element.ELEMENT, function(dd_text){
                        i++;
                        dd_val = dd_text.value.toString().trim().replace(/\\n/g,'');
                        if(dd_val==selectionText){
                            browser.elementIdClick(element.ELEMENT);
                            browser.click(objLocator.locator, function(){
                                callback();
                            });
                        }
                        //console.log('value of i: '+ i + 'Value of len-1:'+ len-1);
                        if(i==len-1){
                            browser.click(objLocator.locator, function(){
                                callback();
                            });
                        }
                    });
                });
            });
        });
    });
}

var selectByIndex = function(locator_info, index, callback){
    fetchLocator(locator_info, function(objLocator){
        if(objLocator.locateStrategy=='xpath')
            locator_options = objLocator.locator + '/option';
        else
            locator_options = objLocator.locator + ' option';
        var i =0, len, dd_val;
        browser.click(objLocator.locator, function(){
            browser.pause(data.shortWait)
            browser.elements(objLocator.locateStrategy, locator_options, function(ele_array){
                len = ele_array.value.length;
                ele_array.value.forEach(function(element) {
                    browser.elementIdText(element.ELEMENT, function(dd_text){
                        i++
                        if(i==index){
                            browser.elementIdClick(element.ELEMENT);
                            browser.click(objLocator.locator, function(){
                                callback();
                            });
                        }
                    });
                });
            });
        });
    });
}

var selectRandomly = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        if(objLocator.locateStrategy=='xpath')
            locator_options = objLocator.locator + '/option';
        else
            locator_options = objLocator.locator + ' option';
        var i =0, len, dd_val;
        browser.click(objLocator.locator, function(){
            browser.pause(data.shortWait)
            browser.elements(objLocator.locateStrategy, locator_options, function(ele_array){
                len = ele_array.value.length;
                randomInteger(1, len, function(random_int){
                    ele_array.value.forEach(function(element) {
                        browser.elementIdText(element.ELEMENT, function(dd_text){
                            i++
                            if(i==random_int){
                                browser.elementIdClick(element.ELEMENT);
                                browser.click(objLocator.locator, function(){
                                    callback();
                                });
                            }
                        });
                    });
                });
            });
        });
    });
}

var expectVisibility = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        isDisplayed(locator_info, function(display_status){
            browser.verify.ok(display_status==true);
            callback();
        });
    });
}

var expectPresent = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        browser.waitForElementPresent(objLocator.locator, data.longWait, function() {
            // do something while we're here
            callback();
        });
    });
}

var clickElement = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        isDisplayed(locator_info, function(display_status){
            browser.click(objLocator.locator, function(){
                callback();
            })
        });
    });
}

var setText = function(locator_info, data, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        isDisplayed(locator_info, function(display_status){
            browser.setValue(objLocator.locator, data, function(){
                callback();
            })
        });
    });
}

var getText = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        isDisplayed(locator_info, function(display_status){
            browser.getText(objLocator.locator, function(txt){
                callback(txt);
            });
        });
    });
}

var getInputBoxText = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        isDisplayed(locator_info, function(display_status){
            browser.getValue(objLocator.locator, function(txt){
                callback(txt);
            });
        });
    });
}

var counter = 0;
var isDisplayed = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        browser.waitForElementPresent(objLocator.locator, 50000, function(){
            scrollToMakeElementVisible(locator_info, function(){
                browser.element(objLocator.locateStrategy, objLocator.locator, function(obj){
                    browser.elementIdDisplayed(obj.value.ELEMENT, function(display){
                        if(display.status != "-1"){
                            callback(true);
                        }else{
                            counter++;
                            if(counter>data.timeout){
                                callback(false);
                            }else{
                                isDisplayed(locator_info, function(status){
                                    callback(status);
                                })
                            }
                        }
                    });
                });
            }); 
        });
    });
}

var scrollToMakeElementVisible = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){
        setLocateStrategy(objLocator);
        browser.getLocation(objLocator.locator, function(location_details){
            browser.execute(function(x, y){
                window.scrollTo(x, y-300);
            }, [location_details.value.x, location_details.value.y]);
            callback();
        });
    });
}

var markCheckBoxOrRadio = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){ 
        setLocateStrategy(objLocator);
        browser.pause(data.shortWait);
        browser.element(objLocator.locateStrategy, objLocator.locator, function(obj){
            browser.elementIdSelected(obj.value.ELEMENT, function(isSelected){
                if(isSelected.value==false){
                    clickElement(locator_info, function(){
                        callback();
                    })
                }
            });
        });
    });
}

var isSelected = function(locator_info, callback){
    fetchLocator(locator_info, function(objLocator){ 
        setLocateStrategy(objLocator);
        browser.pause(data.shortWait);
        browser.element(objLocator.locateStrategy, objLocator.locator, function(obj){
            browser.elementIdSelected(obj.value.ELEMENT, function(isSelected){
                callback(isSelected.value);
            });
        });
    });
}

var setLocateStrategy = function(objLocator){
    if(objLocator.locateStrategy=='xpath') browser.useXpath();
    else browser.useCss();
}

var switchFrameById = function(id, callback){
    browser.useCss().waitForElementVisible("#"+id, 30000, function(){
        browser.frame(id, function(result){
            callback();
        });
    });
}

var switchToParentFrame = function(callback){
    browser.frame(0, function(result){
        callback();
    });
}

var randomInteger = function(min, max, callback){
    callback(min + parseInt(Math.random() * ((max - min) + 1)));
}

var fetchLocator = function(identifier, callback){
    // page|object  -- pageRegistration|dd_year_dob
     var obj_arr = identifier.toString().split("|");
    var locator = object[obj_arr[0]][obj_arr[1]];
     callback(locator);
}

var getRandomEmailId = function(callback){
    // hashbrotoy-78624392@gmail.com
    // hasbrotoy-h
    var date = new Date();
    var postfix = date.getDay()+date.getMonth()+date.getFullYear()+"_"
    +date.getHours()+date.getMinutes()+date.getSeconds();
    callback("hasBroToy_"+postfix+"@gmail.com");
}

exports.switchToParentFrame = switchToParentFrame;
exports.switchFrameById = switchFrameById;
exports.selectByVisibleText = selectByVisibleText;
exports.selectByIndex = selectByIndex;
exports.selectRandomly = selectRandomly;
exports.fetchLocator = fetchLocator;
exports.randomInteger = randomInteger;
exports.expectVisibility = expectVisibility;
exports.isDisplayed = isDisplayed;
exports.clickElement = clickElement;
exports.setText = setText;
exports.setBrowser = setBrowser;
exports.expectPresent = expectPresent;
exports.getRandomEmailId = getRandomEmailId;
exports.markCheckBoxOrRadio = markCheckBoxOrRadio;
exports.getText = getText;
exports.getInputBoxText = getInputBoxText;
exports.isSelected = isSelected;
