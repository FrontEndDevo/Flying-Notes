import { useReducer, useState } from "react";
import { sendNotesToFirebase } from "../../../helpers/AllHelpers";
import classes from "./AddNote.module.scss";

const initialState = {
  titleInput: "",
  contentInput: "",
  isTitleEmpty: false,
  isContentEmpty: false,
};

// Note inputs reducer function.
const noteReducer = (state, action) => {
  switch (action.type) {
    case "TITLE":
      return {
        ...state,
        titleInput: action.value,
      };

    case "TITLE_EMPTY":
      return {
        ...state,
        isTitleEmpty: action.value,
      };

    case "CONTENT":
      return {
        ...state,
        contentInput: action.value,
      };

    case "CONTENT_EMPTY":
      return {
        ...state,
        isContentEmpty: action.value,
      };

    default:
      return state;
  }
};

const AddNote = () => {
  // This state to display the form.
  const [isFormShown, setIsFormShown] = useState(false);
  // This state to know if the note is added successfully or not.
  const [isNoteAdded, setIsNoteAdded] = useState(false);
  // Handling send notes to database errors.
  const [error, setError] = useState(null);

  const [titleLength, setTitleLength] = useState(50);

  // useReducer to handle input values.
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  // Show form or not show form.
  const showFormHandler = () => {
    setIsFormShown((prevState) => !prevState);
  };

  // Input values
  const changeNoteTitleHandler = (event) => {
    setIsNoteAdded(false);
    setTitleLength(50 - event.target.value.length);
    dispatch({ type: "TITLE", value: event.target.value });
    dispatch({ type: "TITLE_EMPTY", value: false });
  };
  const changeNoteContentHandler = (event) => {
    setIsNoteAdded(false);
    dispatch({ type: "CONTENT", value: event.target.value });
    dispatch({ type: "CONTENT_EMPTY", value: false });
  };

  // FORM SUBMMITION
  const submitFormHandler = (event) => {
    event.preventDefault();

    if (notes.titleInput.trim() === "") {
      dispatch({ type: "TITLE_EMPTY", value: true });
      return;
    }
    if (notes.contentInput.trim() === "") {
      dispatch({ type: "CONTENT_EMPTY", value: true });
      return;
    }

    // Main check to submit the form
    if (!notes.isTitleEmpty && !notes.isContentEmpty) {
      // Set values to empty again.
      dispatch({ type: "TITLE", value: "" });
      dispatch({ type: "CONTENT", value: "" });

      setIsNoteAdded(true);

      // Prepare an object holds the note values.
      const note = {
        id: notes.titleInput.trim(),
        title: notes.titleInput.trim(),
        content: notes.contentInput.trim(),
      };

      // Store note in database(Firebase):
      sendNotesToFirebase(note, "POST").catch((error) => {
        setError(error);
      });

      // Store background-color & text color in localstorage:
      const storedNote = {
        ...note,
        bgColor: "#f2f6fa", // initial value (Light White)
        textColor: "#000000", // initial value (Black)
      };
      window.localStorage.setItem(note.id, JSON.stringify(storedNote));
    }
  };

  // Handle the messages which would appear under certain conditions.
  const titleError = notes.isTitleEmpty && (
    <p className={classes.error}>Please enter the note title!</p>
  );

  const noteError = notes.isContentEmpty && (
    <p className={classes.error}>Please enter the note content!</p>
  );

  let finalMessage = isNoteAdded && !error && (
    <p className={classes.success}>Your Note has been added successfully.</p>
  );

  if (error && !isNoteAdded)
    finalMessage = <p className={classes.error}>{error}</p>;

  return (
    <div className={classes["add-new-note"]}>
      <h2 onClick={showFormHandler}>
        Add <span>a</span> new <span>note</span>
      </h2>
      {isFormShown && (
        <form onSubmit={submitFormHandler}>
          <div className={classes.note}>
            <label htmlFor="note-title">Note Title</label>
            <input
              value={notes.titleInput}
              type="text"
              name="title"
              maxLength="50"
              id="note-title"
              placeholder="Enter the note title"
              onChange={changeNoteTitleHandler}
            />
            <p className={classes["title-length"]}>({titleLength})</p>
            {titleError}
          </div>
          <div className={classes.note}>
            <label htmlFor="note-content">The Note</label>
            <textarea
              value={notes.contentInput}
              name="content"
              id="note-content"
              placeholder="Enter the note"
              onChange={changeNoteContentHandler}
            />
            {noteError}
          </div>
          <button>Add The Note</button>
          {finalMessage}
        </form>
      )}
    </div>
  );
};

export default AddNote;
