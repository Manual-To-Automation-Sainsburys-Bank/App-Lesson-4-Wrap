var defaults = require("./wdio-bstack.conf.js");
var _ = require("lodash");

var overrides = {
  specs: [
    "./test/specs/textfield.spec.js",
    "./test/specs/form.spec.js"
  ],
  services: [['browserstack']],

  capabilities: [
    {
      maxInstances: 2,
      device: "Samsung Galaxy S23",
      os_version: "13.0",
      app: "SB_App_Lesson4_Android",
      autoGrantPermissions: true,
      platformName: "Android",
    },
    {
      maxInstances: 2,
      device: "iPhone 14",
      platformName: "iOS",
      os_version: "16",
      gpsEnabled: "true",
      automationName: "XCUITest",
      app: "SB_App_Lesson4_iOS",
    },
  ],
};

const tmpConfig = _.defaultsDeep(overrides, defaults.config);

tmpConfig.capabilities.forEach((caps) => {
  for (const i in tmpConfig.commonCapabilities)
    caps[i] = caps[i] || tmpConfig.commonCapabilities[i];
});

exports.config = tmpConfig;
