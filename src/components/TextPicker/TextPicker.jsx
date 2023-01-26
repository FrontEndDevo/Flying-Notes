import styles from "./TextPicker.module.scss";
const TextPicker = (props) => {
  return (
    <li
      style={{
        backgroundColor: props.textColor,
        transform: `rotate(${props.angle}deg)`,
      }}
      className={styles["text-picker"]}
      // onClick={textColorHandler}
    >
      {props.textColor}
    </li>
  );
};

export default TextPicker;
