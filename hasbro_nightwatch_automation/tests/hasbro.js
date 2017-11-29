module.exports = {
    '@tags': ['Regression','Smoke', 'LoginScript'],
    'Login to HasbroToyShop' : function (browser) {
      browser
        .maximizeWindow()
        .url('http://www.hasbrotoyshop.com')
        .useXpath().waitForElementVisible('//a[@id="signInOutQuickLink_alt"]',10000)
        .click('//a[@id="signInOutQuickLink_alt"]')
        .waitForElementVisible('//*[text()="Sign In to My Account"]',10000)
        .setValue('//input[@name="logonId"]','santosh3518@gmail.com')
        .setValue('//input[@name="logonPassword"]','A123456')
        .click('(//a[@id="WC_AccountDisplay_links_2"]/div)[2]')
        .waitForElementVisible('//span[@id="logonErrorMessage"]',10000)
        .end();
    }
  };