import express from "express";
import { getUser, valTID, getTrackById } from "../controllers/ValTID.js";
import { VToken } from "../Middleware/authVal.js";

const router = express();

router.post("/", valTID);
router.get("/user", VToken, getUser);
router.get("/:id", getTrackById);

export default router;
