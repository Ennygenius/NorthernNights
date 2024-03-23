import express from "express";
import {
  createInfo,
  deleteInfo,
  getAllTInfo,
  updateInfo,
  getSingleTrack,
} from "../controllers/Tracking.js";
import { VToken } from "../Middleware/authVal.js";
import multer from "multer";
import storage from "../utils/cloudinary.js";

const upload = multer({ storage });
const router = express();

router
  .get("/", getAllTInfo)
  .post("/", upload.single("file"), createInfo)
  .patch("/:id", upload.single("file"), updateInfo)
  .get("/details", VToken, getSingleTrack)
  .delete("/:id", deleteInfo);

export default router;
