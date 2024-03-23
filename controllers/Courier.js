import Courier from "../Models/CourierModels.js";

const getAllCourier = async (req, res, next) => {
  try {
    const courier = await Courier.find({});
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const getSingleCourier = async (req, res, next) => {
  try {
    const courier = await Courier.findById(req.params.id);
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const createCourier = async (req, res, next) => {
  const { TrackingId, USPS, firstName, lastName, email } = req.body;
  if (!TrackingId || !USPS || !firstName || !lastName || !email) {
    return res.status(404).json({ errMsg: "Please fill in the fields " });
  }
  const TFind = await Courier.findOne({ TrackingId });
  if (TFind) {
    res.json({ errMsg: "That Tracking id already exists" });
  } else {
    const courier = new Courier({
      TrackingId,
      USPS,
      firstName,
      lastName,
      email,
    });
    try {
      const saveCourier = await courier.save();
      res.json({ courier: saveCourier });
    } catch (err) {
      next(err);
    }
  }
};

const updateCourier = async (req, res, next) => {
  try {
    const courier = await Courier.findByIdAndUpdate(req.params.id, req.body);
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

const deleteCourier = async (req, res, next) => {
  const courier = await Courier.findByIdAndDelete(req.params.id);
  try {
    if (!courier) {
      return res.json({ msg: `no id found of ${req.params.id} found` });
    }
    res.json({ courier });
  } catch (err) {
    next(err);
  }
};

export {
  getAllCourier,
  createCourier,
  deleteCourier,
  updateCourier,
  getSingleCourier,
};
