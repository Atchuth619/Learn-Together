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

// ✅ Get Entries (optional year/month filtering)
export const getEntries = async (req, res) => {
  try {
    const { year, month } = req.query;
    const query = {};

    const parsedYear = year ? parseInt(year, 10) : null;
    const parsedMonth = month ? parseInt(month, 10) : null;

    const hasYear = parsedYear !== null && !Number.isNaN(parsedYear);
    const hasMonth = parsedMonth !== null && !Number.isNaN(parsedMonth) && parsedMonth >= 1 && parsedMonth <= 12;

    if (hasYear && hasMonth) {
      const start = new Date(parsedYear, parsedMonth - 1, 1);
      const end = new Date(parsedYear, parsedMonth, 1);
      query.date = { $gte: start, $lt: end };
    } else if (hasYear) {
      const start = new Date(parsedYear, 0, 1);
      const end = new Date(parsedYear + 1, 0, 1);
      query.date = { $gte: start, $lt: end };
    } else if (hasMonth) {
      query.$expr = { $eq: [{ $month: "$date" }, parsedMonth] };
    }

    const entries = await DailyEntry.find(query).sort({ date: -1 });
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