import { check } from "k6";
import http from "k6/http";

const HOST = 'localhost';
const PORT = '3001';

export default function() {
  let product_id = Math.floor(Math.random() * 10000000);
  let res = http.get(`http://${HOST}:${PORT}/api/images/${product_id}`);
  check(res, {
    "is status 200": (r) => r.status === 200
  });
};