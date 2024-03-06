//this is add category created by ranel
const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    jobCategory: {
      type: String,
      trim: true,
      required: [true, "Category is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("category", jobSchema);
