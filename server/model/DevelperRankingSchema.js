const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  technicalSkills: {
    type: String,
    required: true,
  },
  projectPortfolio: {
    type: String,
    required: true,
  },
  problemSolving: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  communicationSkills: {
    type: String,
    required: true,
  },
  totalRankingPoints: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// collection creation
const Ranking = mongoose.model("RANKING", userSchema);

module.exports = Ranking;
