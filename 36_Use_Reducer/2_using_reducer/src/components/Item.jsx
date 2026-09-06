import styles from "./Item.module.css";

const Item = ({fooditem, bought, handleBuyButtonClicked, handledeletebuttonclicked}) => {

  return (
    <>
  <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
    <span className={styles["kg-span"]}>{fooditem}</span>
    <button 
    className={`${styles.button} btn btn-info`} 
    value={fooditem}
    onClick={handleBuyButtonClicked}>
      Buy
      </button>
      <button 
      className={`${styles.button} btn btn-info`} 
      value={fooditem}
      onClick={handledeletebuttonclicked}>
        Delete
      </button>
    </li>
  </>
  );
};

/* const Item = (props) => {

  return (
    <>
  <li className="list-group-item">{props.foodItem}</li>
  </>
  );
}; */

export default Item;