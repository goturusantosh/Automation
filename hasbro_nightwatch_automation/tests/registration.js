var keyword = require('../libs/genericKeywords.js');
var data = require('../test_data/registration_data.js');
module.exports = {
    '@tags': ['Regression','Smoke', 'Registration'],
    'Register to HasbroToyShop' : function (browser) {
        browser
            .maximizeWindow()
            .url('http://www.hasbrotoyshop.com');
        keyword.expectVisibility( "pageRegistration|linkSignIn", function(){
            keyword.clickElement("pageRegistration|linkSignIn",function(){
                keyword.expectVisibility("pageRegistration|labelRegistrationHeading", function(){
                    keyword.clickElement("pageRegistration|input_Register",function(){
                        var dob_arr = data.dob.split("/");
                        keyword.selectByVisibleText('pageRegistration|dd_year_dob', dob_arr[2],function(ele){
                            keyword.selectByIndex('pageRegistration|dd_month_dob', 3,function(ele){
                                keyword.selectRandomly('pageRegistration|dd_date_dob',function(ele){
                                    keyword.expectVisibility("pageRegistration|formRegistration", function(){
                                        keyword.setText("pageRegistration|input_fname",data.f_name, function(){
                                            keyword.setText("pageRegistration|input_Lastname",data.l_name, function(){})
                                            keyword.setText("pageRegistration|input_Address1",data.address,function(){})
                                            keyword.setText("pageRegistration|input_ChallengeAnswer1",data.challenge_answer1,function(){})
                                            keyword.setText("pageRegistration|input_ChallangeAnswer2",data.challenge_answer2,function(){})
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    }
};