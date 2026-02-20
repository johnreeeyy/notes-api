import Note from "../Models/Note.js";
import mongoose from "mongoose";

export async function getNotes(_, res) {
  try {
    const notes = await Note.find().sort({ createdAt: -1 });
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getNotes Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getNoteByID(req, res) {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Note ID" });
    }

    // fetch note by id
    const note = await Note.findById(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(note);
  } catch (error) {
    console.error("Error in getNoteByID Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function createNote(req, res) {
  try {
    const { title, content } = req.body;
    const note = new Note({ title, content });

    // check if title and content is filled
    if (!title || !content) {
      return res
        .status(400)
        .json({ message: "Title and content are required" });
    }

    const createdNote = await note.save();
    res.status(201).json(createdNote);
  } catch (error) {
    console.error("Error in createNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function updateNote(req, res) {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Note ID" });
    }

    const { title, content } = req.body;
    const updatedNote = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true },
    );
    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json(updatedNote);
  } catch (error) {
    console.error("Error in updateNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;

    // check if id is valid
    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid Note ID" });
    }
    const deletedNote = await Note.findByIdAndDelete(id);
    if (!deletedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    res.status(200).json({ message: "Note Deleted Successfully" });
  } catch (error) {
    console.error("Error in deleteNote Controller", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
