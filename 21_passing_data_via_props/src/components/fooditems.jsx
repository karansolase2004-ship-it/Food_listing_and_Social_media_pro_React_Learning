import Item from "./Item";
// continued from App.jsx : 
// const {items} = props; == const items = props.items;
// just the items should be equal on both side.
// props are immutable
const FoodItems = ( {items} ) => {
  
  return ( 
    <>
      <ul className="list-group">
        {items.map((item) => ( 
          <Item key={item} fooditem={item}></Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;