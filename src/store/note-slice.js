import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
  totalNotes: 0,
};

const NoteSlice = createSlice({
  name: "new-note",
  initialState,
  reducers: {
    // Add(store) notes array which was fetched from database.
    addNotesArr(state, action) {
      state.notes = [];
      state.notes = state.notes.concat(action.payload);
      state.totalNotes = action.payload.length;
    },
    // Add new note
    addNote(state, action) {
      const newNote = {
        id: action.payload.id,
        title: action.payload.title,
        content: action.payload.content,
      };
      state.notes.push(newNote);
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
