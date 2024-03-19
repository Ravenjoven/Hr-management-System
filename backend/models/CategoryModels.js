const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const categorySchema = new Schema(
  {
    jobCategory: {
      type: String,
      trim: true,
      required: [true, "Category is required"],
    },
    jobs: [{ type: Schema.Types.ObjectId, ref: "jobs" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("categories", categorySchema);
