import styles from "./Item.module.css";

const Item = ({ fooditem }) => {
  /* event is to give your event handler information about the user's action (such as a click, key press, or form submission) and to allow you to control the default behavior when needed. */
  const handleBuyButtonClicked = (event) => {
    console.log(event);
    console.log(`${fooditem} being bought`);
  }

  return (
    <>
  <li className={`${styles["kg-item"]} list-group-item`}>
    <span className={styles["kg-span"]}>{fooditem}</span>
    <button className={`${styles.button} btn btn-info`}
    onClick={handleBuyButtonClicked}
    >Buy</button>
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