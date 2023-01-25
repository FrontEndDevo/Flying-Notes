import React, { useState } from "react";
import classes from "./SingleNote.module.scss";
import ColorPicker from "../../ColorPicker/ColorPicker";

import Lottie from "react-lottie";
import * as bgColor from "../../../helpers/Animations/bgcolor.json";

const colors = [
  "#f2f6fa",
  "#E94A35",
  "#F59D00",
  "#F5E100",
  "#009755",
  "#0073BF",
  "#6EC4FD",
  "#7935E9",
  "#B58989",
  "#B7B7B7",
  "#D2B85C",
  "#745029",
  "#790000",
  "#F26D7D",
  "#6DF2B5",
  "#000000",
];

const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);
  // To show or hide the droplist of colors below (in JSX).
  const [showDropList, setShowDropList] = useState(false);
  // This state to change background-color of note.
  const [backgroundColor, setBackgroundColor] = useState("#f2f6fa"); // light white

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

  // Control showing & not showing the droplist of colors.
  const showDropListHandler = () => {
    setShowDropList((prevState) => !prevState);
  };

  // This func. to assign clicked color by user to the BG of note.
  const changeBG = (chossenColor) => {
    setBackgroundColor(chossenColor);
  };

  const colorsList = colors.map((color, index) => (
    <ColorPicker key={index} color={color} backgroundColor={changeBG} />
  ));

  return (
    <li
      style={{ backgroundColor: backgroundColor }}
      className={classes["single-note"]}
    >
      <div className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>

      <div className={classes["note-tools"]}>
        <div className={classes.tools}>
          <div className={classes.lottie} onClick={showDropListHandler}>
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
        <div
          className={`${classes.droplist} ${
            showDropList ? classes["animate-droplist"] : ""
          }`}
        >
          <h3>Pick a note background-color</h3>
          <ul className={classes.list}>{colorsList}</ul>
        </div>
      </div>
    </li>
  );
};

export default SingleNote;
