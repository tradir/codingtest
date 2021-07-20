import http from "./httpService";
import { apiUrl } from "../config.json";

export function getBeers() {
  return http.get(apiUrl);
}
