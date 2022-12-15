import commonLib from "../utils/commonLib";
import functionLibrary from "../utils/functionLibrary";


class homepage extends commonLib {
  open() {
    return super.open(`/`);
  }
  randomGenerator() {
    return super.randomGenerator();
  }
  get bestSeller() {
    return $('(//a[contains(text(),"Shop All")])[1]');
  }

  async clickingOnBestSeller() {
    await functionLibrary.clickElement(this.bestSeller, 'Shop All');
  }
}
export default new homepage();
