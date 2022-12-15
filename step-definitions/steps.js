import { Given, When, Then } from "@wdio/cucumber-framework";
import homepage from "../pageobject/home.page";
import bestsellerpage from "../pageobject/bestseller.page";
import productpage from "../pageobject/product.page";
import checkoutpage from "../pageobject/checkout.page";
import paymentpage from "../pageobject/payment.page";
import apihelper from "../utils/apihelper";
import { jsondata } from "../resource/data";
import { BASE_URI } from "../resource/apiconfig";
import reportLib from "../utils/reportLib";
import apiResponse from "../resource/APIdata.json";
import fs from "fs";

var Convertjsondata = JSON.parse(jsondata);

Given(/^Launching the URL$/, async () => {
  const browName = await browser.capabilities.browserName;
  await reportLib.ReportTile(browName);
  await browser.setTimeout({ implicit: 5000 });
  await browser.maximizeWindow();
  await homepage.open();
});

When(/^Navigate to ShopAll page$/, async () => {
  await homepage.clickingOnBestSeller();
});

Then(
  /^Select the (.*) in ShopAll page and adding to cart$/,
  async (product) => {
    await bestsellerpage.clickingOnSelectedProductList(product);
    await productpage.clickingOnAddCart();
    await productpage.clickingOnBagButton();
  }
);

Then(/^Click on checkout and proceed with GuestUser$/, async () => {
  await checkoutpage.clickingOnCheckOutButton();
  await checkoutpage.clickingOnGuestUser();
  await browser.pause(5000);
  await checkoutpage.enteringShippingAddress();
  await checkoutpage.selectingShippingMethod();
  await checkoutpage.clickingOnContinueShipping();
});

Then(
  /^Entering Credit Card details like (.*) (.*) (.*) (.*)$/,
  async (creditcardNumber, creditcardCVV, creditcardName, creditcardExpiry) => {
    await paymentpage.enteringCreditCarDetails(
      creditcardNumber,
      creditcardCVV,
      creditcardName,
      creditcardExpiry
    );
    await browser.takeScreenshot();
  }
);

Given(/^Booking an hotel$/, async () => {
  const response = await apihelper.POST(BASE_URI, "/booking", Convertjsondata);
  let APIdataResponse = JSON.stringify(response.body);
  let filepath = `${process.cwd()}/resource/APIdata.json`;
  fs.writeFileSync(filepath, APIdataResponse);
});

Then(/^Customer API Testing$/, async () => {
  const response = await apihelper.GET(
    BASE_URI,
    "/booking/" + apiResponse.bookingid
  );
  console.log(response.body);
});

Then(/^validate the (.*) text in ShopAll page$/, async (productText) => {
  await bestsellerpage.validateText(productText);
});
