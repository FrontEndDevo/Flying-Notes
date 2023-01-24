import { useState } from "react";
import classes from "./SingleNote.module.scss";

import Lottie from "react-lottie";
import * as bgColor from "../../../helpers/Animations/bgcolor.json";

const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);

  // This variable belongs to (Lottie) animation
  const bgcolorOptions = {
    loop: false,
    autoplay: true,
    animationData: bgColor,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

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
          <Lottie
            style={{ cursor: "pointer" }}
            options={bgcolorOptions}
            height={100}
            width={100}
          />
          {/* <button>
            <img src={editNote} alt="edit-the-note" />
            Edit the note?
          </button> */}
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
