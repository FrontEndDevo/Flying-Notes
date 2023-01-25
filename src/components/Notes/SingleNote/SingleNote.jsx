import React, { useState } from "react";
import classes from "./SingleNote.module.scss";
import ColorPicker from "../../ColorPicker/ColorPicker";

import Lottie from "react-lottie";
import * as bgColor from "../../../helpers/Animations/bgcolor.json";

const colors = [
  "#E94A35",
  "#F59D00",
  "#F5E100",
  "#009755",
  "#0073BF",
  "#083D7A",
  "#6EC4FD",
  "#7935E9",
  "#000000",
  "#B58989",
  "#B7B7B7",
  "#D2B85C",
  "#745029",
  "#790000",
  "#F26D7D",
  "#6DF2B5",
];

const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);

  // This variable belongs to (Lottie) animation
  const bgcolorOptions = {
    loop: true,
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

  const colorsList = colors.map((color) => <ColorPicker color={color} />);

  return (
    <li className={classes["single-note"]}>
      <div className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>

      <div className={classes["note-tools"]}>
        <div className={classes.tools}>
          <div className={classes.lottie}>
            <Lottie options={bgcolorOptions} height={100} width={100} />
          </div>
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
        <div className={classes.droplist}>
          <h3>Pick a note background-color</h3>
          <ul className={classes.list}>{colorsList}</ul>
        </div>
      </div>
    </li>
  );
};

export default SingleNote;
