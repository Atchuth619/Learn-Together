import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import dailyEntryRoutes from "./routes/dailyEntryRoutes.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/entries", dailyEntryRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(5000, () => console.log("Server started"));