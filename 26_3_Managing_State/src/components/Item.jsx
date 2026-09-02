import styles from "./Item.module.css";

const Item = ({fooditem, bought, handleBuyButtonClicked}) => {

  return (
    <>
  <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>
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