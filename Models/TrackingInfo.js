import mongoose from "mongoose";

const TInfo = new mongoose.Schema({
  courier: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "Courier",
    },
  ],
  goodsImage: {
    type: String,
    default: "",
  },
  trackingStatus: {
    type: String,
    enum: {
      values: ["HOLD", "PENDING", "DELIVERED"],
      message: "{VALUE} is not supported",
    },
    default: "PENDING",
  },
  from: {
    type: String,
    required: true,
  },
  to: {
    type: String,
    required: true,
  },
  seviceMode: {
    type: String,
    enum: {
      values: ["AIR", "SHIP", "LAND"],
      message: "{VALUE} is not supported",
    },
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  goodsDetails: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  deliveryDate: {
    type: Date,
    default: Date.now(),
  },
  recieverName: {
    type: String,
    required: true,
  },
  recieverNumber: {
    type: Number,
    required: true,
  },
  recieverEmail: {
    type: String,
    required: true,
  },
});

const TrackInfo = mongoose.model("TInfo", TInfo);

export default TrackInfo;
