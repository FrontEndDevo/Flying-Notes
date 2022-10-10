import { useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import { notesActions } from "../../../store/note-slice";
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
  const actionsDispatch = useDispatch();

  // This state to display the form.
  const [isFormShown, setIsFormShown] = useState(false);

  // useReducer to handle input values.
  const [notes, dispatch] = useReducer(noteReducer, initialState);

  // Show form or not show form.
  const showFormHandler = () => {
    setIsFormShown((prevState) => !prevState);
  };

  // Input values
  const changeNoteTitleHandler = (event) => {
    dispatch({ type: "TITLE", value: event.target.value });
    dispatch({ type: "TITLE_EMPTY", value: false });
  };
  const changeNoteContentHandler = (event) => {
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

      // Add values to redux store:
      const note = {
        id: notes.titleInput.trim(),
        title: notes.titleInput.trim(),
        content: notes.contentInput.trim(),
      };
      actionsDispatch(notesActions.addNote(note));
    }
  };
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
              id="note-title"
              placeholder="Enter the note title"
              onChange={changeNoteTitleHandler}
            />
            {notes.isTitleEmpty && <p>Please enter the note title!</p>}
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
            {notes.isContentEmpty && <p>Please enter the note content!</p>}
          </div>
          <button>Add The Note</button>
        </form>
      )}
    </div>
  );
};

export default AddNote;
