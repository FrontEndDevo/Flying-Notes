import { createSlice } from "@reduxjs/toolkit";

const initialState = { notes: [], totalNotes: 0 };

const NoteSlice = createSlice({
  name: "new-note",
  initialState,
  reducers: {
    // Add new note
    addNote(state, action) {
      const newNote = {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      };
      state.notes.concat(newNote);
      state.totalNotes++;
    },
  },

  // Delete certain note
  deleteNote(state, action) {
    const deletedNoteId = action.payload;
    const newNotesArray = state.notes.filter(
      (note) => note.id !== deletedNoteId
    );

    state.notes = newNotesArray;
    state.totalNotes--;
  },
});

export const notesActions = NoteSlice.actions;

export default NoteSlice;