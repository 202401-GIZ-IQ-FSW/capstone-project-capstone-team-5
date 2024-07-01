const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
    maxlength: 100,
  },
  company: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  skills: {
    type: [String],
  },

  //field for application deadline
  datePosted: {
    type: Date,
    default: Date.now,
    validate: {
      validator: (v) => v <= Date.now(),
      message: "Date posted can not be in the future",
    },
  },
});

module.exports = mongoose.model("Job", jobSchema);
