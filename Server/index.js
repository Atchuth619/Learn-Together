import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import cors from "cors";
import dailyEntryRoutes from "./routes/dailyEntryRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import swaggerSpec from "./config/swagger.js";
import swaggerUi from "swagger-ui-express";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "*"
}));
app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec)); // Swagger UI route
app.use("/api/auth", authRoutes);
app.use("/api/entries", dailyEntryRoutes);

app.get("/", (req, res) => {
  res.send("API Running...");
});

app.listen(process.env.PORT ||5000, () => console.log("Server started"));