const mongoose = require("mongoose");
const { urlencoded } = require("express");

const defaultRequiredOptions = [true, "{PATH} is required."];

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    lastName: {
      type: String,
      required: defaultRequiredOptions,
      minlength: [2, "{PATH} must be at least {MINLENGTH} characters."],
    },
    company: {
      type: String,
    },
    // validate function https://mongoosejs.com/docs/api.html#schematype_SchemaType-validate
    phoneNumber: {
      type: Number,
      required: defaultRequiredOptions,
      minlength: [10, "{PATH} must be at least {MINLENGTH} characters."],
    },
    // validate email https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    location: {
      type: String,
    },
    password: {
      type: String,
      required: true,
    },
    confirmPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;
