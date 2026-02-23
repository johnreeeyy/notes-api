import express from "express";
import {
  getNotes,
  getNoteByID,
  createNote,
  updateNote,
  deleteNote,
} from "../Controllers/notesController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.get("/", protect, getNotes);
router.get("/:id", protect, getNoteByID);
router.post("/", protect, createNote);
router.put("/:id", protect, updateNote);
router.delete("/:id", protect, deleteNote);

export default router;
