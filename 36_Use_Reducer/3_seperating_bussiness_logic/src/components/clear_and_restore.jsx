import styles from "./clear_and_restore.module.css";
import { useContext } from "react";
import { FooditemsContext } from "../store/food-items-store";

const Clear_and_restore = () => {

  const {clearAllitems, restoreAllitems} = useContext(FooditemsContext);

  return (
    <div className={styles.container}>
    <button 
    className={`${styles.button} btn btn-info`} 
    onClick={restoreAllitems}>
      Restore All
      </button>
      <button 
      className={`${styles.button} btn btn-info`} 
      onClick={clearAllitems}>
        Clear All
      </button>
  </div>
  );
};

export default Clear_and_restore;