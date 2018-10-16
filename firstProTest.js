describe('angularjs homepage todo list', function() { 

  it('should add a todo', function() {
    browser.get('https://angularjs.org');

    element(by.model('todoList.todoText')).sendKeys('write first protractor test');
    element(by.css('[value="add"]')).click();
    browser.waitForAngular();
    var todoList = element.all(by.repeater('todo in todoList.todos'));
    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write first protractor test');
    browser.waitForAngular();
    // You wrote your first test, cross it off the list
    todoList.get(2).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
	browser.waitForAngular();
  });
  it('added name',function(){
	  var val = element(by.model('yourName')).sendKeys('Tarun');
	  browser.sleep(5000);
	  var textBox = element(by.xpath('html/body/div[2]/div[1]/div[2]/div[2]/div/h1')).getText();
	  //console.log(val)
	  console.log(textBox)
	  expect(textBox).toEqual('Hello Tarun!');
  });
});