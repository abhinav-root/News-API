import { redisClient } from "../app.js";

async function isInCache(req, res, next) {
  const result = await redisClient.get(req.url);
  if (result) {
    console.log("cache hit !!!");
    return res.json({ data: JSON.parse(result) });
  } else {
    console.log("cache miss");
  }
  next();
}

export default isInCache;
