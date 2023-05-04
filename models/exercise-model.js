import mongoose from "mongoose";

const exerciseModel = new mongoose.Schema(
  {
    userId: { 
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now(),
    }
  }, 
  {
    timestamps: true,
  }
);

export default mongoose.model('Exercise', exerciseModel);
