import express from "express";
import dotenv from "dotenv";
import { createClient } from "redis";
import router from "./routes/index.js";
import isInCache from "./middlewares/cache.js";
dotenv.config();

let redisClient;
async function main() {
  redisClient = createClient(6379, "127.0.0.1");
  console.log("connected to redis");

  await redisClient.connect();

  const app = express();

  const PORT = process.env.PORT || 5000;

  app.use("/api", isInCache, router);

  app.listen(PORT, () => console.log(`Listening of port ${PORT}`));
}

main();
export { redisClient };
