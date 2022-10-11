import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // notes: [
  //   {
  //     id: "Title one",
  //     title: "Title one",
  //     content:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi enim voluptatibus dolore sed corrupti facilis ex excepturi quisquam doloribus. Iste voluptas debitis nemo non laboriosam rerum in obcaecati optio, dicta magni officiis placeat, dolor quidem ea, dolore nam. Aspernatur laudantium soluta nostrum aut. Veniam totam ex velit tempore deleniti aliquam nemo? Cupiditate ratione totam tempore repudiandae minima aliquid! Reprehenderit perspiciatis illum nobis veniam quaerat aliquid, ipsam magnam inventore laboriosam deserunt voluptate error culpa laudantium enim perferendis sequi suscipit, itaque quas minus molestiae ducimus omnis beatae! Numquam, blanditiis tenetur. Autem exercitationem reiciendis iusto beatae perferendis in doloremque distinctio fuga ratione aliquid.",
  //   },
  //   {
  //     id: "Title two",
  //     title: "Title two",
  //     content:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi enim voluptatibus dolore sed corrupti facilis ex excepturi quisquam doloribus. Iste voluptas debitis nemo non laboriosam rerum in obcaecati optio, dicta magni officiis placeat, dolor quidem ea, dolore nam. Aspernatur laudantium soluta nostrum aut. Veniam totam ex velit tempore deleniti aliquam nemo? Cupiditate ratione totam tempore repudiandae minima aliquid! Reprehenderit perspiciatis illum nobis veniam quaerat aliquid, ipsam magnam inventore laboriosam deserunt voluptate error culpa laudantium enim perferendis sequi suscipit, itaque quas minus molestiae ducimus omnis beatae! Numquam, blanditiis tenetur. Autem exercitationem reiciendis iusto beatae perferendis in doloremque distinctio fuga ratione aliquid.",
  //   },
  //   {
  //     id: "Title three",
  //     title: "Title three",
  //     content:
  //       "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi enim voluptatibus dolore sed corrupti facilis ex excepturi quisquam doloribus. Iste voluptas debitis nemo non laboriosam rerum in obcaecati optio, dicta magni officiis placeat, dolor quidem ea, dolore nam. Aspernatur laudantium soluta nostrum aut. Veniam totam ex velit tempore deleniti aliquam nemo? Cupiditate ratione totam tempore repudiandae minima aliquid! Reprehenderit perspiciatis illum nobis veniam quaerat aliquid, ipsam magnam inventore laboriosam deserunt voluptate error culpa laudantium enim perferendis sequi suscipit, itaque quas minus molestiae ducimus omnis beatae! Numquam, blanditiis tenetur. Autem exercitationem reiciendis iusto beatae perferendis in doloremque distinctio fuga ratione aliquid.",
  //   },
  // ],
  notes:[],
  totalNotes: 0,
};

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
