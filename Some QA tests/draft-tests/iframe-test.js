describe("IFrame test", () => {
  beforeEach(function() {
    browser.setWindowSize(1200, 1000);
    browser.url("IFrame/index.html");
    browser.pause(5000);
  });

  it("Test the clicking of a given button housed within the IFrame", () => {
    const iframe = $("#frame");
    browser.switchToFrame(iframe);

    const findOutMore_Button = $("//*[text()='Our Products']");
    findOutMore_Button.waitForDisplayed();
    findOutMore_Button.click();
    browser.pause(5000);
  });
});
