import express from "express";
import {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
} from "../controllers/dailyEntryController.js";

const router = express.Router();

// CRUD Routes
router.post("/", createEntry);        // Create
router.get("/", getEntries);          // Get all
router.get("/:id", getEntryById);     // Get one
router.put("/:id", updateEntry);      // Update
router.delete("/:id", deleteEntry);   // Delete

export default router;