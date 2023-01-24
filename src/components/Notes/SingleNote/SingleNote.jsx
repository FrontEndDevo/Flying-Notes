import { useState } from "react";
import classes from "./SingleNote.module.scss";
import editNote from "../../../assets/images/edit.png";

const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);

  const enableHoverBtnHandler = () => {
    setIsHover(true);
  };

  const disableHoverBtnHandler = () => {
    setIsHover(false);
  };

  // Send the selected note title back.
  const dblClickNoteHandler = () => {
    props.deleteNote(props.title);
  };

  return (
    <li className={classes["single-note"]}>
      <div className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>

      <div className={classes["note-tools"]}>
        <div className={classes.tools}>
          <button>
            <img src={editNote} alt="edit-the-note" />
            Edit the note?
          </button>
        </div>

        <div className={classes.delete}>
          {isHover && <p>Double click to confirm deletion</p>}
          <button
            onMouseEnter={enableHoverBtnHandler}
            onMouseLeave={disableHoverBtnHandler}
            onDoubleClick={dblClickNoteHandler}
          >
            Delete Note
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleNote;
