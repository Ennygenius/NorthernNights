import { CloudinaryStorage } from "multer-storage-cloudinary";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary, // Use cloudinary, not cloudinary.v2
  allowedFormats: ["jpg", "jpeg", "png"], // Use allowedFormats, not allowedFormat
  params: {
    folder: "image/northernNights",
  },
});

export default storage;
