const mongoose = require("mongoose");
const validator = require('validator');

const applicationSchema = new mongoose.Schema({
  user_email: {
    type: String,
    required: [true, "Email address is required!!!"],
    validate: [validator.isEmail, "Please enter valid email address!!!"],
  },
  advertisement_title: {
    type: String,
    required: [true, "Advertisement title is required!!!"],
  },
  company_name: {
    type: String,
    required: [true, "Company name is required!!!"],
  },
  isApproved: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Application", applicationSchema);
