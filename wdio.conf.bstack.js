import { config } from "./wdio.conf";
var _ = require("lodash");

var overrides = {
  user: "karthikvaradhan_ED8g2l" || process.env.BROWSERSTACK_USERNAME,
  key: "dBqn73B3xLzCAaXrKNz6" || process.env.BROWSERSTACK_ACCESS_KEY,

  specs: ["./features/**/login.feature"],

  capabilities: [
    {
      "bstack:options": {
        deviceName: "iPhone 11",
        osVersion: "13",
        projectName: "First Webdriverio IOS Project",
        buildName: "Webdriverio IOS Parallel",
        sessionName: "parallel_test",
        debug: true,
      },
      browserName: "safari",
      acceptInsecureCerts: true,
    },
    {
      "bstack:options": {
        deviceName: "Samsung Galaxy S10e",
        osVersion: "9.0",
        projectName: "First Webdriverio Android Project",
        buildName: "Webdriverio Android Parallel",
        sessionName: "parallel_test",
        debug: true,
      },
      browserName: "chrome",
      acceptInsecureCerts: true,
    },
  ],

  logLevel: "info",
  coloredLogs: true,
  screenshotPath: "./errorShots/",
  baseUrl: "",

  services: [["browserstack"]],
};

exports.config = _.defaultsDeep(overrides, config);
