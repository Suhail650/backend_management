const mongoose = require("mongoose");
const moment = require("moment");

const blogSchema = new mongoose.Schema(
  {
    title: { required: true, type: String },
    shortDescription: { type: String, required: true },
    longDescription: { type: String, required: true },
    createdDateTime: {
      type: Date,
      default: Date.now,
      get: (date) => moment(date).format("MMMM DD, YYYY"),
    },
  },
  { toJSON: { getters: true }, toObject: { getters: true } }
);

module.exports = mongoose.model("Blog", blogSchema);
