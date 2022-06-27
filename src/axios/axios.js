import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const token = process.env.GNEWS_API_KEY;

const axiosInstance = axios.create({
  baseURL: "https://gnews.io/api/v4",
  params: { token, lang: "en", country: "in" },
});

export default axiosInstance;
