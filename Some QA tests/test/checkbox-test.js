describe("isExisted, isSelected, isDisplayed", () => {
    beforeEach(function() {
        browser.setWindowSize(1200, 1000);
        browser.url("/Dropdown-Checkboxes-RadioButtons/index.html");
    });
  
    it("Validate state of checkbox", () => {
      const checkbox = $("//div[@id='checkboxes']//input[@value='option-1']");
      expect(checkbox.isExisting()).to.be.true;
      expect(checkbox.isSelected()).to.be.false;
      expect(checkbox.isDisplayed()).to.be.true;

      console.log("is existing: " + checkbox.isExisting());
      console.log("is selected: " + checkbox.isSelected());
      console.log("is displayed: " + checkbox.isDisplayed());
    }); 
  });