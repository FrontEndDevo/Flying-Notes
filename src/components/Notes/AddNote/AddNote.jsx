import { useState } from "react";
import classes from "./AddNote.module.scss";

const AddNote = () => {
  const [isFormShown, setIsFormShown] = useState(false);

  const showFormHandler = () => {
    setIsFormShown((prevState) => !prevState);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    console.log(event.target);
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
              type="text"
              name="title"
              id="note-title"
              placeholder="Enter the note title"
            />
          </div>
          <div className={classes.note}>
            <label htmlFor="note-content">The Note</label>
            <textarea
              name="content"
              id="note-content"
              placeholder="Enter the note"
            />
          </div>
          <button>Add The Note</button>
        </form>
      )}
    </div>
  );
};

export default AddNote;
