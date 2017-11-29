module.exports= {
    pageLogin:{
        inputUsername: {
            locator: '#WC_AccountDisplay_FormInput_logonId_In_Logon_1',
            locateStrategy: 'css selector'
        },
        inputPassword: {
            locator: '#WC_AccountDisplay_FormInput_logonPassword_In_Logon_1',
            locateStrategy: 'css selector'
        },
        checkboxRememberMe: {
            locator: '#WC_AccountDisplay_FormInput_rememberMe_In_Logon_2',
            locateStrategy: 'css selector'
        },
        buttonSignIn: {
            locator: '#WC_AccountDisplay_links_2 div.button_text',
            locateStrategy: 'css selector'
        }

    },

    pageRegistration:{

        dd_month_dob:{
            locator: '//*[@id="WC_PersonalInfoExtension_birth_month"]',
            locateStrategy: 'xpath'
        },

        dd_date_dob:{
            locator: '//*[@id="WC_PersonalInfoExtension_birth_date"]',
            locateStrategy: 'xpath'
        },

        dd_year_dob:{
            locator: '//*[@id="WC_PersonalInfoExtension_birth_year"]',
            locateStrategy: 'xpath'
        },

        input_email1: {
            locator: '//input[@id="WC_UserRegistrationAddForm_FormInput_email1_In_Register_1"]',
            locateStrategy: 'xpath'
        },
        input_logonpassword1: {
            locator: '//input[@id="WC_UserRegistrationAddForm_FormInput_logonPassword_In_Register_1"]',
            locateStrategy: 'xpath'

        },
        input_logonpasswordverify: {
            locator: '//input[@id="WC_UserRegistrationAddForm_FormInput_logonPasswordVerify_In_Register_1"]',
            locateStrategy: 'xpath'
        },
        input_challengeAnswer: {
            locator: '//input[@id="WC_UserRegistrationAddForm_FormInput_challengeAnswer_In_Register_1"]',
            locateStrategy: 'xpath'
        },
        labelRegistrationHeading: {
            locator:'//*[text()="Sign In to My Account"]',
            locateStrategy:'xpath'
        },
        formRegistration: {
            locator: '//div[@id="WC_UserRegistrationAddForm_div_5"]',
            locateStrategy: 'xpath'
        },
       
        input_Register: {
            locator:'//*[text()="Register"]',  
            locateStrategy:'xpath'
        },
        input_fname: {
            locator:'//input[@id="WC_UserRegistrationAddForm_NameEntryForm_FormInput_firstName_1"]',
            locateStrategy:'xpath'
        },
        input_Lastname: {
            locator:'//input[@id="WC_UserRegistrationAddForm_NameEntryForm_FormInput_lastName_1"]',
            locateStrategy:'xpath'
        },
        input_Address1: {
            locator:'//input[@id="WC_UserRegistrationAddForm_AddressEntryForm_FormInput_address1_1"]',
            locateStrategy:'xpath'
        },
        input_ChallengeAnswer1: {
            locator:'//input[@id="WC_UserRegistrationAddForm_FormInput_challengeAnswer_In_Register_1"]',
            locateStrategy:'xpath'
        },
        input_ChallangeAnswer2: {
            locator:'//input[@id="WC_UserRegistrationAddForm_FormInput_challengeAnswer_In_Register_1"]',
            locateStrategy:'xpath'
        },

    },
    
    pageHome : {

        linkSignIn: {
            locator: '//a[@id="signInOutQuickLink_alt"]',
            locateStrategy:'xpath'
        },
        linkQuick: {
            locator:'#quickLinksButton',
            locateStrategy:'css selector'
        },
        linkSignIn2: {
            locator:'#signInOutQuickLink',
            locateStrategy: 'css selector'
        },
		linkViewOrder: {
            locator: '//*[text()="View Order"]',
            locateStrategy:'xpath'
        },

        linkHeaderBrand: {
            locator: '#departmentButton_12001',
            locateStrategy: 'css selector'
        },
        linkHeaderBrandDropDown: {
            locator: '#subcategoryLink_12001_29501_29503',
            locateStrategy: 'css selector'
        },
    },
    
    pageDashBoard : {
        linkWelcome: {
            locator: '#myAccountQuickLink_alt',
            locateStrategy:'css selector'
        },
    } ,

    pageGrid : {
        
        linkGrid: {
            locator: 'div.productListingWidget div div', 
            locateStrategy:'css selector'
        },
        linkGridProduct: {
            locator: '#listViewAdd2Cart_256026',
            locateStrategy:'css selector'
        },
        linkGotoCartButton: {
            locator: '#GotoCartButton2',
            locateStrategy:'css selector'
        }, 
    }, 
    
    pageShoppingCart : {
                
        linkShoppingCart: {
            locator: 'div.headingtext span', 
            locateStrategy:'css selector'
        },
        linkCheckoutButton: {
            locator: '#guestShopperContinue', 
            locateStrategy:'css selector'
        },

        linkRemoveArray: {
            locator: 'div#order_details_table a#WC_OrderItemDetailsf_links_2_',
            locateStrategy: 'css selector'
        }
    },

    pageShipping : {
                        
        linkNextButton: {
            locator: '#shippingBillingPageNext', 
            locateStrategy:'css selector'
        },

        linkShippingInfo: {
            locator: '.shipping_header', 
            locateStrategy:'css selector'
        }

    },

    pageMyAccount:{

        linkMyAccount: {
            locator: 'div.col12,account_title', 
            locateStrategy:'css selector'
        },
        linkViewOrders: {
            locator: '#WC_MyAccountCenterLinkDisplay_inputs_2',     
            locateStrategy:'css selector'
        },
        linkAddnew: {
            locator: '#WC_AjaxAddressBookForm_links_1', 
            locateStrategy:'css selector'
        },

        myAccountText: {
            locator: '(//*[text()="My Account"])[2]',     
            locateStrategy:'xpath'
        }

    },

    pagePayment: {
        inputCreditcard: {
            locator:'//input[@id="selectionForm:creditCardNumber0"]',
            locateStrategy:'xpath'
        },
        inputCvv: {
            locator:'.holder.cvcHolder input',
            locateStrategy:'css selector'
        },

        buttonContinue: {
            locator:'.buttonHolderRight input',
            locateStrategy:'css selector'
        },
        dropDownMonth:{
            locator:'.holder.expiryDateHolder select:nth-child(2)',
            locateStrategy:'css selector'
        },
        dropDownYear:{
            locator:'.holder.expiryDateHolder select:nth-child(3)',
            locateStrategy:'css selector'
        },

        radioPaymentTypeCreditCard: {
            locator: '#paymentTypeCreditCard',
            locateStrategy: 'css selector'
        },
    },

    PageCreateAddress:{
        ShippingAndBilling:{
            locator:'#WC_AccountForm_sbAddress_3',
            locateStrategy:'css selector'
        },
        Avalara: {
            locator:'#newAddressScenario a:nth-child(1)',
            locateStrategy:'css selector'
        }
    },

    pageEditAddress: {
        inputFirstname:{
            locator:'//*[@id="WC_AccountForm_NameEntryForm_FormInput_firstName_1"]',
            locateStrategy:'xpath',
        },
        inputLastname:{
            locator:'//*[@id="WC_AccountForm_NameEntryForm_FormInput_lastName_1"]',
            locateStrategy:'xpath',
        },
        inputStreetAddress:{
            locator:'//*[@id="WC_AccountForm_NameEntryForm_FormInput_lastName_1"]',
            locateStrategy:'xpath',
        },
        inputCity:{
            locator:'//*[@id="WC_AccountForm_AddressEntryForm_FormInput_city_1"]',
            locateStrategy:'xpath',
        },
        inputZip:{
            locator:'//*[@id="WC_AccountForm_AddressEntryForm_FormInput_zipCode_1"]',
            locateStrategy:'xpath',
        },
        inputEmail:{
            locator:'//*[@id="WC_UserRegistrationAddForm_FormInput_email1_In_Register_1"]',
            locateStrategy:'xpath',
        },
        inputPhoneNumber:{
            locator:'//*[@id="WC_UserRegistrationAddForm_FormInput_phoneNum_In_Register_1"]',
            locateStrategy:'xpath',
        },
        inputState:{
            locator:'//*[@id="WC_AccountForm_AddressEntryForm_FormInput_state_1"]',
            locateStrategy:'xpath',
        },
        buttonSubmit:{
            locator:'//*[@id="WC_AjaxAddressBookForm_links_4a"]',
            locateStrategy:'xpath',
        },





    }

}
