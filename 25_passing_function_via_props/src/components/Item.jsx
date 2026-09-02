import styles from "./Item.module.css";

const Item = ({fooditem, handleBuyButtonClicked}) => {

  return (
    <>
  <li className={`${styles["kg-item"]} list-group-item`}>
    <span className={styles["kg-span"]}>{fooditem}</span>
    <button className={`${styles.button} btn btn-info`} value={fooditem}
    onClick={handleBuyButtonClicked}>
      Buy
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