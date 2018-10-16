
exports.config = {
      seleniumAddress: 'http://localhost:4444/wd/hub',
      capabilities: {
          'browserName': 'chrome'
      },
      specs: ['calcVerify.js'],
     framework: 'jasmine2' ,
      onPrepare: function() {
		 browser.ignoreSynchronization = true;
         browser.waitForAngular();
          browser.sleep(500); 
         browser.resetUrl = 'file:///';
          var jasmineReporters = require('C:/Users/tjaiswal/Desktop/procatractor/node_modules/jasmine-reporters');
          jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter(null, true, true)
          );
     }
   };