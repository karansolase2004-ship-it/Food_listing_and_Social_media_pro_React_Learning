import styles from "./foodinput.module.css";
import { useContext } from "react";
import { FooditemsContext } from "../store/food-items-store";

const FoodInput = () => {

  const {handleonKeyDown} = useContext(FooditemsContext);

  return ( <input 
  type="text" placeholder="Enter Food Item Here"
  className={styles.foodInput}
  onKeyDown={handleonKeyDown}
  />
  );
}

export default FoodInput;