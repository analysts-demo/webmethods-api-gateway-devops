import { sleep } from"k6";
import http from "k6/http";
import { jUnit, textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export default function() {
  http.get(`${__ENV.API_URL}`)	
  sleep(3);
};

export function handleSummary(data) {
  return {
   'stdout': textSummary(data),
   'junit.xml': jUnit(data),
  };
}