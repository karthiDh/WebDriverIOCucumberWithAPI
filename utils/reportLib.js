const TimelineReporter = require("wdio-timeline-reporter").default;

class ReportLib {

  async ReportPass(message) {
    TimelineReporter.addContext(message);
  }

  async ReportFail(message){
    TimelineReporter.addContext(message);
  }

  async ReportInfo(message){
    TimelineReporter.addContext(message);
  }

  async ReportTile(browser) {
    TimelineReporter.addContext({
      title: "browserName",
      value: browser
    });
  }

}
export default new ReportLib();
