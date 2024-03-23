import express from "express";
import { getMe, login, signup } from "../controllers/Admin.js";
import { VToken } from "../Middleware/authVal.js";

const router = express();

router.post("/signup", signup);
router.post("/login", login);
router.get("/me", VToken, getMe);

export default router;
