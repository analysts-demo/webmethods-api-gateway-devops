import { sleep } from"k6";
import http from "k6/http";

export let options = {
  duration: "1m",
  vus: 5,
  thresholds: {
    http_req_duration: ["p(95)<500"] // 95 percent of response times must be below 500ms
  }
};

export default function() {
  http.get("http://daeirnd58134.eur.ad.sag:30555/gateway/Product%20API/manufacturer");
  sleep(3);
};