import express from "express";
import weatherRouter from "./weather-router";

const router = express.Router();
router.use("/weather", weatherRouter);

export default router;
