import request from "supertest";
import reportLib from "../utils/reportLib";

async function GET(BASE_URI, endpoint) {
  try {
    const response = await request(BASE_URI)
      .get(endpoint)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json");
    reportLib.ReportPass(JSON.stringify(response.body));
    return response;
  } catch (err) {
    err.message = `Error making a GET call to ${endpoint}, ${err}`;
    throw err;
  }
}

async function POST(BASE_URI, endpoint, payload) {
  try {
    const response = await request(BASE_URI)
      .post(endpoint)
      .set("Content-Type", "application/json")
      .set("Accept", "application/json")
      .send(payload);
    reportLib.ReportPass(JSON.stringify(response.body));
    return response;
  } catch (err) {
    err.message = `Error making a POST call to ${endpoint}, ${err}`;
    throw err;
  }
}
export default { GET, POST };
