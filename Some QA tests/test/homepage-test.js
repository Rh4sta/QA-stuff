const assert = require('assert');

describe("Test webdriveruni homepage", () => {
  it("Validate wether the webdriveruni homepgae title is correct", () => {
      browser.url('./');
      const title = browser.getTitle();
    assert.strictEqual(title, 'WebDriverUniversity.com');
  });
});
