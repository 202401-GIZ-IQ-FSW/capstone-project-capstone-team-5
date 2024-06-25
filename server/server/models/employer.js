const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employerSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  website: {
    type: String,
    required: true,
    trim: true,
  },
  industry: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  socialMedia: {
    type: {
      facebook: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
    },
  },
});

module.exports = mongoose.model("Employer", employerSchema);
