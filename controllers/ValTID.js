import Courier from "../Models/CourierModels.js";
import jwt from "jsonwebtoken";
import TrackInfo from "../Models/TrackingInfo.js";

const valTID = async (req, res, next) => {
  const { TrackingId } = req.body;
  try {
    if (!TrackingId) {
      return res.json({ message: "Fill in the field" });
    }
    const courier = await Courier.findOne({ TrackingId });

    if (!courier) {
      return res.json({ message: "Tracking ID not found" });
    }

    const payload = { courier };

    const token = jwt.sign(payload, process.env.Secret, {
      expiresIn: "10d",
    });

    if (courier) {
      return res.json({
        TrackingId,
        token,
      });
    }
  } catch (error) {
    next(error);
  }
};

const getUser = async (req, res, next) => {
  try {
    res.json({ user: req.user });
  } catch (error) {
    next(error);
  }
};
const getTrackById = async (req, res, next) => {
  try {
    const info = await TrackInfo.findById(req.params.id);
    res.json({ info });
  } catch (error) {
    nextg(error.message);
  }
};

export { valTID, getUser, getTrackById };
