import axios from "axios";

const httpClient = axios.create({
  baseURL: "https://tech-test-backend.dwsbrazil.io",
});

export { httpClient };
