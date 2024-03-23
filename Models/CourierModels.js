import mongoose from "mongoose";

const CourierSchema = new mongoose.Schema({
  TrackingId: {
    type: String,
    required: true,
  },
  USPS: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const Courier = mongoose.model("Courier", CourierSchema);

export default Courier;
