import { check,sleep,fail } from"k6";
import http from "k6/http";
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";

export default function() {
  let res;
  res =  http.get(`${__ENV.API_URL}`)
   if (
    !check(res, {
      'status code MUST be 200': (res) => res.status == 200,
    })
   ) {
    fail('status code was *not* 200');
  }
  sleep(3);
};

export function handleSummary(data) {
  return {
    "summary-functional.html": htmlReport(data),
  };
}