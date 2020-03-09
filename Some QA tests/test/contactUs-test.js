import ContactUs_PO from '../page-objects/ContactUs_PO';

describe("Challenges", () => {
  beforeEach(function() {
    ContactUs_PO.open();
  });



it("Submit all information via the contact us page", () => {
 ContactUs_PO.successfulContactUsSubmission();
  });
});
