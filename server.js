import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./utils/Db.js";
import TInfo from "./Routes/TrackingRoute.js";
import Courier from "./Routes/CourierRoute.js";
import ValTrackID from "./Routes/ValTrackID.js";
import Admin from "./Routes/Admin.js";
import cors from "cors";
import errorHandler from "./Middleware/errorMiddleware.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

app.use(cors());
app.use(express.json());

app.use("/trackingInfo", TInfo);
app.use("/login", ValTrackID);
app.use("/courier", Courier);
app.use("/auth", Admin);

//error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on 127.0.0.1:${PORT}`);
  connectDB();
});
