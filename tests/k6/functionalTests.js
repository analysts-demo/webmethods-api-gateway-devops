import { sleep } from"k6";
import http from "k6/http";

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