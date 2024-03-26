const mongoose = require('mongoose');
// Define the schema for the "registrations" collection
const registrationSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Full name is required']
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact number is required']
  },
  email: {
    type: String,
    required: [true, 'Email is required']
  },
  password: {
    type: String,
    required: [true, 'Password is required']
  },
  birthMonth: String,
  birthDay: Number,
  birthYear: Number,
  gender: String,
});

// Create a model based on the schema
module.exports = mongoose.model('registrations', registrationSchema);

