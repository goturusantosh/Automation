module.exports = {
  '@tags': ['Regression','Smoke', 'ModuleName'],
  'Demo test Google' : function (browser) {
    browser
    // .url('http://json.org/example.html')
    // .useXpath().waitForElementVisible("(//pre)[3]", 10000)
    // .getText("(//pre)[3]", function(json){
    //   //console.log(json.value);

    //   var json_obj = JSON.parse(json.value);

    //   console.log(json_obj.menu.id);

    // });

      .url('http://www.google.com')
      .waitForElementVisible('body', 1000)
      .setValue('input[type=text]', 'nightwatch')
	  .keys(browser.Keys.ENTER)
	  .pause(1500)
      .waitForElementVisible('button[name=btnG]', 1000)
      .click('button[name=btnG]')
      .pause(1000)
      .assert.containsText('#main', 'Night Watch')
      .end();
  }
};