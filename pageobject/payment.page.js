import commonLib from "../utils/commonLib";
import functionLibrary from "../utils/functionLibrary";

class paymentpage extends commonLib {
  get creditCardNum() {
    return $("#credit-card-number");
  }

  get creditCardExpiryDate() {
    return $("#expiration");
  }

  get creditCardName() {
    return $("#braintree-ccName input");
  }

  get creditCardCVV() {
    return $("#cvv");
  }

  get creditExpDateframe() {
    return $("#braintree-hosted-field-expirationDate");
  }

  get creditCVVFrame() {
    return $("#braintree-hosted-field-cvv");
  }

  async enteringCreditCarDetails(creditcardNumber,creditcardCVV,creditcardName,creditcardExpiry) {
    const creditNumFrame = await $("#braintree-hosted-field-number");
    const creditExpDateframe = await $(
      "#braintree-hosted-field-expirationDate"
    );
    const creditCVVFrame = await $("#braintree-hosted-field-cvv");
    await browser.pause(5000);
    await browser.switchToFrame(creditNumFrame);
    await functionLibrary.SendValues(this.creditCardNum,creditcardNumber,"Credit Card Number");
    await browser.pause(1000);
    await browser.switchToParentFrame();
    await browser.pause(1000);
    await browser.switchToFrame(creditExpDateframe);
    await functionLibrary.SendValues(this.creditCardExpiryDate,creditcardExpiry,"Credit Card Expiry");
    await browser.pause(1000);
    await browser.switchToParentFrame();
    await functionLibrary.SendValues(this.creditCardName,creditcardName,"Credit Card Name");
    await browser.pause(1000);
    await browser.switchToParentFrame();
    await browser.pause(1000);
    await browser.switchToFrame(creditCVVFrame);
    await functionLibrary.SendValues(this.creditCardCVV,creditcardCVV,"Credit Card CVV");
  }
}
export default new paymentpage();
