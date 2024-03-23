import mongoose from "mongoose";

const Auth = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please the username field is required"],
  },
  email: {
    type: String,
    required: [true, "Please the email field is required"],
  },
  password: {
    type: String,
    required: [true, "Please the password field is required"],
  },
  repeatPassword: {
    type: String,
    required: [true, "Please the username field is required"],
  },
});

const Admin = mongoose.model("auth", Auth);

export default Admin;
