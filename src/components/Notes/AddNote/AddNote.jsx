import { useRef, useState } from "react";
import classes from "./AddNote.module.scss";

const AddNote = () => {
  // This state to display the form.
  const [isFormShown, setIsFormShown] = useState(false);

  // Are inputs empty?
  const [isTitleEmpty, setIsTitleEmpty] = useState(false);
  const [isContentEmpty, setIsContentEmpty] = useState(false);

  // These refs for our note inputs (title || content) in JSX.
  const titleInputRef = useRef();
  const contentInputRef = useRef();

  // Show form or not show form.
  const showFormHandler = () => {
    setIsFormShown((prevState) => !prevState);
  };

  // FORM SUBMMITION
  const submitFormHandler = (event) => {
    event.preventDefault();
    // Check if inputs are empty to set the states.
    if (titleInputRef.current.value === "") setIsTitleEmpty(true);
    if (contentInputRef.current.value === "") setIsContentEmpty(true);

    // Check if the inputs are empty or not.
    if (!isTitleEmpty && !isContentEmpty) {
      console.log(titleInputRef.current.value);
      console.log(contentInputRef.current.value);
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
              type="text"
              name="title"
              id="note-title"
              placeholder="Enter the note title"
              ref={titleInputRef}
            />
            {isTitleEmpty && <p>The title can't be empty!</p>}
          </div>
          <div className={classes.note}>
            <label htmlFor="note-content">The Note</label>
            <textarea
              name="content"
              id="note-content"
              placeholder="Enter the note"
              ref={contentInputRef}
            />
            {isContentEmpty && <p>The note can't be empty!</p>}
          </div>
          <button>Add The Note</button>
        </form>
      )}
    </div>
  );
};

export default AddNote;
