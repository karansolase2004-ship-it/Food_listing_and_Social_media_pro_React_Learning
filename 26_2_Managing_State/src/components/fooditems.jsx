import Item from "./Item.jsx";

const FoodItems = ( {items} ) => {

  const handleBuyButtonClicked = (event) => {
    console.log(`${event.target.value} being bought`);
  }
  
  return ( 
    <>
      <ul className="list-group">
        {items.map((item) => ( 
          <Item 
          key={item} 
          fooditem={item} 
          handleBuyButtonClicked={handleBuyButtonClicked}>
          </Item>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;