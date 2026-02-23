import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./Config/db.js";
import notesRoutes from "./Routes/notesRoutes.js";
import authRoutes from "./Routes/authRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

// middleware

app.use(express.json());

app.use("/api/notes", notesRoutes);
app.use("/api/auth", authRoutes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Started Listening on PORT: ", PORT);
  });
});
