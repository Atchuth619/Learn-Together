import express from "express";
import {
  createEntry,
  getEntries,
  getEntryById,
  updateEntry,
  deleteEntry,
} from "../controllers/dailyEntryController.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: DailyEntries
 *   description: Daily entry management
 */

/**
 * @swagger
 * /api/entries:
 *   post:
 *     summary: Create a new entry
 *     tags: [DailyEntries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             author: "user"
 *             date: "2026-08-06"
 *             techNews:
 *               - title: "React 19 Released"
 *                 notes: "New features introduced"
 *             investments:
 *               - title: "Invest in AI stocks"
 *                 notes: "Long term growth"
 *     responses:
 *       201:
 *         description: Entry created successfully
 */
router.post("/", createEntry);

/**
 * @swagger
 * /api/entries:
 *   get:
 *     summary: Get all entries
 *     tags: [DailyEntries]
 *     responses:
 *       200:
 *         description: List of all entries
 */
router.get("/", getEntries);

/**
 * @swagger
 * /api/entries/{id}:
 *   get:
 *     summary: Get entry by ID
 *     tags: [DailyEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Entry ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Entry details
 */
router.get("/:id", getEntryById);

/**
 * @swagger
 * /api/entries/{id}:
 *   put:
 *     summary: Update entry
 *     tags: [DailyEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Entry updated
 */
router.put("/:id", updateEntry);

/**
 * @swagger
 * /api/entries/{id}:
 *   delete:
 *     summary: Delete entry
 *     tags: [DailyEntries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *     responses:
 *       200:
 *         description: Entry deleted
 */
router.delete("/:id", deleteEntry);

export default router;