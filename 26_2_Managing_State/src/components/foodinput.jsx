import styles from "./foodinput.module.css";

const FoodInput = (props) => {

  return ( <input 
  type="text" placeholder="Enter Food Item Here"
  className={styles.foodInput}
  onKeyDown={props.handleonKeyDown}
  />
  );
}

export default FoodInput;