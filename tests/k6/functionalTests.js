import { check,sleep } from"k6";
import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function() {
  let res;
  res =  http.get(`${__ENV.API_URL}`)
   check(
    res,
    {
      'status is 200': (r) => r.status == 200,
    }
  );
  sleep(3);
};

export function handleSummary(data) {
  return {
    "summary.html": htmlReport(data),
  };
}