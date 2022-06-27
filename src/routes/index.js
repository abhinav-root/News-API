import express from "express";
import axios from "axios";
import { redisClient } from "../app.js";
import axiosInstance from "../axios/axios.js";

const CACHE_TIME = 10;

const router = express.Router();

async function cacheResponse(key, value) {
  try {
    await redisClient.setEx(key, 10, JSON.stringify(value));
    console.log("saved to cache", key);
  } catch (err) {
    console.log(err, "could not save to cache");
  }
}

router.get("/top-headlines", async function (req, res) {
  try {
    const response = await axiosInstance.get("top-headlines");
    const data = response.data;
    await cacheResponse(req.url, data);
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal server error" });
  }
});

router.get("/search", async function (req, res) {
  try {
    const query = req.query.query;
    const q = query.replaceAll(" ", " OR ");
    const response = await axiosInstance({
      method: "GET",
      url: "/search",
      params: {
        q,
      },
    });
    const data = response.data;
    await cacheResponse(req.url, data);
    return res.json({ data });
  } catch (error) {
    console.log(error);
    return res.status(500).send({ msg: "Internal server error" });
  }
});

export default router;
