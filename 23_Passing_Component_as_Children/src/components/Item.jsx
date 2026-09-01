import styles from "./Item.module.css";

const Item = ({ fooditem }) => {

  return (
    <>
  <li className={`${styles["kg-item"]} list-group-item`}>
    <span className={styles["kg-span"]}>{fooditem}</span>
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