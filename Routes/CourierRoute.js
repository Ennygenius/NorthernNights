import express from "express";
import {
  createCourier,
  deleteCourier,
  getAllCourier,
  getSingleCourier,
  updateCourier,
} from "../controllers/Courier.js";

const router = express();

router
  .get("/", getAllCourier)
  .post("/", createCourier)
  .get("/:id", getSingleCourier)
  .patch("/:id", updateCourier)
  .delete("/:id", deleteCourier);

export default router;
