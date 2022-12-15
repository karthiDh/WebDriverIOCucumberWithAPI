import reportLib from "../utils/reportLib";

class functionLibrary {
  async clickElement(elem, text) {
    try {
      await elem.click();
      await reportLib.ReportPass(text + " is Clicked");
    } catch (err) {
      err.message = `Unable to click on the ${text}`;
      throw err;
    }
  }

  async SendValues(element, value, text) {
    try {
      await element.setValue(value);
      await reportLib.ReportPass(value + " is entered in " + text);
    } catch (err) {
      err.message = `Unable to Send ${value} to the ${text}`;
      throw err;
    }
  }

  async SelectValue(elem, value, text) {
    try {
      await elem.selectByVisibleText(value);
      await reportLib.ReportPass(value + " is selected from the " + text);
    } catch (err) {
      err.message = `Unable to select ${value} from ${text}`;
      throw err;
    }
  }

  async ValidateText(element, text) {
    try {
      var actualText = await element.getText();
      var expectedText = text;
      await expect(element).toHaveText(expectedText);
      await reportLib.ReportPass(actualText + " is equal to " + expectedText);
    } catch (err) {
      err.message = `${actualText} is not equal to ${expectedText}`;
      throw err;
    }
  }

}

export default new functionLibrary();
