import styles from "./Item.module.css";

console.log(styles);

const Item = ({ fooditem }) => {

  return (
    <>
  <li className={styles["kg-item"]}>
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