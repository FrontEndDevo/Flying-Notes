import noteSlice from "./note-slice";
import AuthSlice from "./auth-slice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { note: noteSlice.reducer, auth: AuthSlice.reducer },
});

export default store;
