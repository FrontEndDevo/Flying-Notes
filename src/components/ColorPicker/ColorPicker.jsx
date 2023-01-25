import styles from "./ColorPicker.module.scss";
const ColorPicker = (props) => {

  const selectColorHandler = () => {
    // console.log(props.color);
    props.backgroundColor(props.color);
  };
  return (
    <li
      style={{ backgroundColor: props.color }}
      className={styles["color-picker"]}
      onClick={selectColorHandler}
    ></li>
  );
};

export default ColorPicker;
