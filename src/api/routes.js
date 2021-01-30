import express from "express";
import pokemon from "./pokemon"
const router = express.Router();

router.use("/pokemon", pokemon);

export default router;
