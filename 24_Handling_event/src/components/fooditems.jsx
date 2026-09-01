import Item from "./Item.jsx";

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