describe('angularjs homepage todo list', function() {


  browser.get('file:///C:/Users/tjaiswal/Desktop/procatractor/firstapp.html');
	//browser.get('https://myapplication.abc.com/');
  browser.getPageSource().then(function (res) {
  console.log('Page source code is-' + res);
});
/*
browser.close().then(function(res)
{
	console.log("promise is resloved now we doing closing window "+res)
});
*/
	browser.explore()
	browser.refresh();
  //expect(browser.getCurrentUrl()).toBe('file:///C:/Users/tjaiswal/Desktop/procatractor/firstapp.html')
	//browser.restart();
  //browser.get('https://www.faceboook.com')
  var num1 = element(by.model('first'));
  var num2 = element(by.model('second'));
  var gobtn = element(by.id('gobutton'));
  var results = element(by.binding('latest'));
  var history = element.all(by.repeater('result in memory'));


  function add(a, b) {
    num1.sendKeys(a);
		browser.pause()
    num2.sendKeys(b);
		browser.pause();
    gobtn.click();
  }

  function sub(a, b) {
    var selectOp = element(by.model('operator'));
    selectOp.$('[value="SUBTRACTION"]').click();
    //select obj = new select(driver.findElement(by.xpath("html/body/div[1]/div/form/select")));
    //obj.selectbyvisibleText("-");
    num1.sendKeys(a);
    num2.sendKeys(b);
    gobtn.click();
  }

  function mul(a, b) {
    var selectOp = element(by.model('operator'));
    selectOp.$('[value="MULTIPLICATION"]').click();
    num1.sendKeys(a);
    num2.sendKeys(b);
    gobtn.click();
  }

  function divide(a, b) {
    num1.sendKeys(a);
    num2.sendKeys(b);
    gobtn.click();
  }

  //beforeEach(function() {
  //    browser.get('file:///C:/Users/tjaiswal/Desktop/procatractor/firstapp.html');
  //});

  it('should add a todo', function() {
    //browser.get('http://juliemr.github.io/protractor-demo/');
    add(1, 2);
    browser.sleep(5000);
    add(2, 2);
    browser.sleep(5000);

    expect(history.count()).toEqual(2);
    //expect(results.getText()).toEqual('3')
		var start = new Date().getTime();
     browser.executeAsyncScript(
     'window.setTimeout(arguments[arguments.length - 1], 500);').
     then(function() {
       console.log(
           'Elapsed time: ' + (new Date().getTime() - start) + ' ms');
     });
		 browser.getPageSource();
  });

  it('should minus a todo', function() {
    //browser.get('http://juliemr.github.io/protractor-demo/')

    sub(2, 2);
    browser.sleep(5000);
    sub(3, 2);
    browser.sleep(5000);

    expect(history.count()).toEqual(4);
    //expect(results.getText()).toEqual('3')

  });
  it('should multiple a todo', function() {
    //browser.get('http://juliemr.github.io/protractor-demo/')

    mul(2, 2);
    browser.sleep(5000);
    mul(3, 2);
    browser.sleep(5000);

    expect(history.count()).toEqual(6);
    //expect(results.getText()).toEqual('3')
    expect(history.last().getText()).toContain('1 + 2');
    expect(history.first().getText()).toContain('3 * 2');

  });


});
