import commonLib from "../utils/commonLib";
import homepage from "../pageobject/home.page";
import functionLibrary from "../utils/functionLibrary";

class checkoutpage extends commonLib {
  get checkoutButton() {
    return $(
      '//div[@class="previewCartAction-checkout"]/a[@data-action-detail="Checkout_now"]'
    );
  }
  get emailAddress() {
    return $("#email");
  }

  get continueAsGuest() {
    return $("#checkout-customer-continue");
  }

  get continueShipping() {
    return $("#checkout-shipping-continue");
  }

  get firstName() {
    return $("#firstNameInput");
  }

  get lastName() {
    return $("#lastNameInput");
  }

  get postalCode() {
    return $("#postCodeInput");
  }
  get city() {
    return $("#cityInput");
  }

  get addressOne() {
    return $("#addressLine1Input");
  }

  get phoneNum() {
    return $("#phoneInput");
  }

  get selectCountry() {
    return $("#countryCodeInput");
  }

  get selectState() {
    return $("#provinceCodeInput");
  }

  get rushShippingMethod() {
    return $('//span[@class="shippingOption-desc"][contains(text(),"Rush")]');
  }

  async clickingOnCheckOutButton() {
    await this.checkoutButton.waitForClickable({ timeout: 60000 });
    await functionLibrary.clickElement(this.checkoutButton, "Checkout Button");
  }

  async clickingOnGuestUser() {
    await this.emailAddress.waitForClickable({ timeout: 60000 });
    await this.emailAddress.setValue(homepage.randomGenerator() + "@gmail.com");
    await functionLibrary.clickElement(this.continueAsGuest,"Continue As Guest Button");
  }

  async enteringShippingAddress() {
    await this.firstName.waitForDisplayed({ timeout: 60000 });
    await functionLibrary.SendValues(this.firstName, "Karthik", "First Name");
    await functionLibrary.SendValues(this.lastName, "V", "Last Name");
    await functionLibrary.SelectValue(this.selectCountry, "United States", "Country");
    await functionLibrary.SendValues(this.postalCode, "49001", "Postal Code");
    await functionLibrary.SendValues(this.city, "KALAMAZOO", "Postal Code");
    await functionLibrary.SelectValue(this.selectState, "Michigan", "State");
    await functionLibrary.SendValues(this.addressOne, "1 BLANCHE AVE", "Address 1");
    await functionLibrary.SendValues(this.phoneNum, "9160391430", "Phone Number");
  }

  async selectingShippingMethod() {
    await this.rushShippingMethod.waitForClickable({ timeout: 50000 });
    await functionLibrary.clickElement(this.rushShippingMethod, "Rush Shipping");
  }

  async clickingOnContinueShipping() {
    await this.continueShipping.waitForClickable({ timeout: 50000 });
    await functionLibrary.clickElement(this.continueShipping, "Continue Shipping");
  }
}
export default new checkoutpage();
