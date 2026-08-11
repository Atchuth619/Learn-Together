import mongoose from "mongoose";

const dailyEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    username: {
      type: String,
      required: true,
      trim: true,
    },
    date: {
      type: Date,
      required: true,
    },
    famousPerson: {
      name: String,
      notes: String,
    },
    techNews: [
      {
        title: String,
        notes: String,
      },
    ],
    investments: [
      {
        title: String,
        notes: String,
      },
    ],
  },
  { timestamps: true }
);

const DailyEntry = mongoose.model("DailyEntry", dailyEntrySchema, "entries");

export default DailyEntry;