import DailyEntry from "../models/DailyEntry.js";

// ✅ Create Entry
export const createEntry = async (req, res) => {
  try {
    const entry = await DailyEntry.create(req.body);
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get All Entries
export const getEntries = async (req, res) => {
  try {
    const entries = await DailyEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Get Single Entry
export const getEntryById = async (req, res) => {
  try {
    const entry = await DailyEntry.findById(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Update Entry
export const updateEntry = async (req, res) => {
  try {
    const entry = await DailyEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(entry);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ Delete Entry
export const deleteEntry = async (req, res) => {
  try {
    const entry = await DailyEntry.findByIdAndDelete(req.params.id);

    if (!entry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};