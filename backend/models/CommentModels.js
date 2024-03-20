const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const commentSchema = new Schema(
  {
    comment: {
      type: String,
      trim: true,
      required: [true, "Comment is required"],
    },
    application: [{ type: Schema.Types.ObjectId, ref: "applications" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("comments", commentSchema);
