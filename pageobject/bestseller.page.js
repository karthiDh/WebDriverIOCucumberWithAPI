import commonLib from "../utils/commonLib";
import functionLibrary from "../utils/functionLibrary";

class bestsellerpage extends commonLib {
  get productlist() {
    return $$('//div[@class="card-title"]');
  }

  async clickingOnSelectedProduct(product) {
    await this.productlist.map(function (element) {
      var productName = element.getText();
      if (this.productName == this.product) {
        functionLibrary.clickElement(element, productName);
      }
    });
  }

  async clickingOnSelectedProductList(product) {
    const productlistName = await this.productlist;
    for (const element of productlistName) {
      const productName = await element.getText();
      console.log(this.productName);
      if (productName.toLowerCase() == product.toLowerCase()) {
        await functionLibrary.clickElement(element, productName);
        break;
      }
    }
  }

  async validateText(product){
    const productlistName = await this.productlist;
    for (const element of productlistName) {
      const productName = await element.getText();
      if (productName.toLowerCase() == product.toLowerCase()) {
        await functionLibrary.ValidateText(element, productName);
        break;
      }
    }
  }
}
export default new bestsellerpage();
