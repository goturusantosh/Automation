
module.exports={

    before : function(cb) {
        //console.log('before');
        cb();
    },

    beforeEach : function(browser, cb) {
        require('./genericKeywords.js').setBrowser(browser, function () {
            cb();
        });
    },

    after : function(cb) {
        //console.log('after');
        cb();
    },

    afterEach : function(browser, cb) {
        browser.end();
        //console.log('afterEach');
        cb();
    },

    reporter : function(results, cb) {
        //console.log(results);
        cb();
    }

}