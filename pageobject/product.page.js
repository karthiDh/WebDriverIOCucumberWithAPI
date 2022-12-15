import commonLib from "../utils/commonLib";
import functionLibrary from "../utils/functionLibrary";

class productpage extends commonLib {
  get addToCart() {
    return $('//input[@id="form-action-addToCart"]');
  }

  get bagButton() {
    return $('//a[@data-action-detail="Header_View Bag"]');
  }

  async clickingOnAddCart() {
    await this.addToCart.waitForClickable({ timeout: 30000 });
    await functionLibrary.clickElement(this.addToCart, 'Add to Cart');
  }

  async clickingOnBagButton() {
    await this.bagButton.waitForClickable({ timeout: 50000 });
    await functionLibrary.clickElement(this.bagButton, 'Add to Cart');
  }
}
export default new productpage();