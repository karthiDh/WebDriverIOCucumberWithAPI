export default class commonLib {
  open(path) {
    return browser.url(`https://sk-ii-staging1.mybigcommerce.com/`);
  }
  randomGenerator() {
    return Math.random().toString(36).substring(2);
  }
}
