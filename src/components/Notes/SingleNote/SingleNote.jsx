import { useState } from "react";
import classes from "./SingleNote.module.scss";
const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);

  const enableHoverBtnHandler = () => {
    setIsHover(true);
  };

  const disableHoverBtnHandler = () => {
    setIsHover(false);
  };

  // Delete the selected note:
  const deleteNoteHandler = () => {
    
  };

  return (
    <li className={classes["single-note"]}>
      <div className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
      <div className={classes["note-tools"]}>
        <div className={classes.tools}>note tools</div>
        <div className={classes.delete}>
          {isHover && <p>Double click to confirm deletion</p>}
          <button
            onMouseEnter={enableHoverBtnHandler}
            onMouseLeave={disableHoverBtnHandler}
            onDoubleClick={deleteNoteHandler}
          >
            Delete Note
          </button>
        </div>
      </div>
    </li>
  );
};

export default SingleNote;
