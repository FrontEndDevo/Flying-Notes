import React, { useState } from "react";
import classes from "./SingleNote.module.scss";
import ColorPicker from "../../ColorPicker/ColorPicker";

import Lottie from "react-lottie";
import * as bgColor from "../../../helpers/Animations/bgcolor.json";
import TextPicker from "../../TextPicker/TextPicker";

const colors = [
  "#f2f6fa",
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
  "#E94A35",
];

const SingleNote = (props) => {
  // A state to handle (confirm message) when delete a note.
  const [isHover, setIsHover] = useState(false);
  // To show or hide the droplist of colors below (in JSX).
  const [showDropList, setShowDropList] = useState(false);
  // This state to change background-color of note.
  const [backgroundColor, setBackgroundColor] = useState("#f2f6fa"); // Light White
  // This state to change text-color of selected text in a note.
  const [textColor, setTextColor] = useState("#000000"); // Black

  const [rotateList, setRotateList] = useState(false);

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
    setShowDropList((prevState) => !prevState);

    // Set the new BG color in localStorage:
    const currentNote = localStorage.getItem(props.title);
    const newNote = { ...JSON.parse(currentNote), bgColor: chossenColor };
    localStorage.setItem(newNote.id, JSON.stringify(newNote));
  };
  // This func. to assign clicked color by user to the text-color of note.
  const changeTextColor = (textColor) => {
    setTextColor(textColor);
    setRotateList((prev) => !prev);

    // Set the new text color in localStorage:
    const currentNote = localStorage.getItem(props.title);
    const newNote = { ...JSON.parse(currentNote), textColor };
    localStorage.setItem(newNote.id, JSON.stringify(newNote));
  };

  /* This was a try to change selected text by user to a specific color also chossen by user.
  Unfortunately, I did not succeed in doing this despite a lot of searching */
  //const textMouseUpHandler = (e) => {
  // Get selected text to change its color:
  //   if (window.getSelection().toString()) {
  //     console.log(window.getSelection().toString());
  //   }
  // };

  // This angle to rotate every single li when click (Pick One!) li in JSX.
  let angle = 320;

  // Open & Close the "Colors Circle" as I call it.
  const rotateListsHandler = (_) => {
    setRotateList((prev) => !prev);
  };

  const colorsList = colors.map((color, index) => (
    <ColorPicker key={index} color={color} backgroundColor={changeBG} />
  ));

  const textColors = colors.map((textColor, index) => (
    <TextPicker
      key={index}
      textColor={textColor}
      angle={rotateList ? (angle -= 20) : 0}
      getTextColor={changeTextColor}
    />
  ));

  return (
    <li
      style={{ backgroundColor: backgroundColor }}
      className={classes["single-note"]}
    >
      <div style={{ color: textColor }} className={classes["note-content"]}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>

      <div className={classes["note-tools"]}>
        <div className={classes.tools}>
          <div className={classes.lottie} onClick={showDropListHandler}>
            <Lottie options={bgcolorOptions} height={100} width={100} />
          </div>
        </div>
        <div
          className={`${classes.droplist} ${
            showDropList ? classes["animate-droplist"] : ""
          }`}
        >
          <h3>Pick a note background-color</h3>
          <ul className={classes.list}>{colorsList}</ul>
        </div>
        {!isHover && (
          <div className={classes["text-picker"]}>
            <ul className={classes["text-colors"]}>
              <li
                style={{ transform: `rotate(${rotateList ? 340 : 0}deg)` }}
                className={classes["pick-one"]}
                onClick={rotateListsHandler}
              >
                Pick One!
              </li>
              {textColors}
            </ul>
          </div>
        )}
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
