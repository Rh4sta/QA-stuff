describe("Test contactus logic via webdriveruni", () => {
    beforeEach(function() {
        browser.setWindowSize(1200, 1000);
        browser.url("./");
    });
  
    it("Test the contactus page", () => {
      const contactUsButton = $("//h1[text()='CONTACT US']");
      contactUsButton.click();

      browser.switchWindow("WebDriver | Contact Us");

      const firstNameTextField = $("[name='first_name']");
      firstNameTextField.waitForDisplayed();
      firstNameTextField.addValue('Add your text here');
      browser.pause(3000);

      firstNameTextField.clearValue();
      browser.pause(3000);

      firstNameTextField.setValue('Hello?');
      browser.pause(3000);
    }); 
  });