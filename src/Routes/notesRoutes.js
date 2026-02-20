import express from "express";
import {
  createNote,
  deleteNote,
  getNoteByID,
  getNotes,
  updateNote,
} from "../Controllers/notesController.js";

const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNoteByID);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
