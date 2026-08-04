import mongoose from "mongoose";

const dailyEntrySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
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

const DailyEntry = mongoose.model("DailyEntry", dailyEntrySchema);

export default DailyEntry;