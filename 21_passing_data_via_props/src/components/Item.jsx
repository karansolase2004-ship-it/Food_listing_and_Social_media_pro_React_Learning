const Item = ({ fooditem }) => {

  return (
    <>
  <li className="list-group-item">{fooditem}</li>
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