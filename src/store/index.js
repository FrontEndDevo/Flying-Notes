import noteSlice from "./note-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { note: noteSlice.reducer },
});

export default store;
